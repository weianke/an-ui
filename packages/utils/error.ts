// 从 lodash-es 库中导入 isString 工具函数，用于检查值是否为字符串类型
// lodash-es 是 lodash 的 ES 模块版本，支持 tree-shaking，可以按需导入减小打包体积
import { isString } from 'lodash-es';

/**
 * ErUI 自定义错误类
 * 继承自 JavaScript 内置的 Error 类，用于创建特定于 ErUI 的错误类型
 * 这样可以更好地识别错误来源，便于错误监控和调试
 */
class ErUIError extends Error {
  /**
   * 构造函数
   * @param {string} message - 错误信息
   */
  constructor(message: string) {
    // 调用父类 Error 的构造函数，传入错误信息
    super(message);
    // 设置错误名称，默认为 'Error'，这里改为 'ErUIError'
    // 这有助于在错误堆栈中快速识别错误来源
    this.name = 'ErUIError';
  }
}

/**
 * 抛出错误的工具函数
 * 用于在开发中快速抛出带有作用域标识的错误
 *
 * @param {string} scope - 错误发生的作用域/模块名，用于标识错误来源
 * @param {string} msg - 具体的错误信息
 * @throws {ErUIError} 始终抛出一个 ErUIError 异常
 *
 * @example
 * // 当参数无效时抛出错误
 * function validateInput(input) {
 *   if (!input) {
 *     throwError('validateInput', '输入不能为空');
 *   }
 * }
 */
export function throwError(scope: string, msg: string) {
  // 创建一个 ErUIError 实例并立即抛出
  // 错误信息格式为: [作用域] 具体信息
  throw new ErUIError(`[${scope}] ${msg}`);
}

/**
 * 调试警告函数的重载声明
 * 函数重载允许 TypeScript 根据参数类型提供不同的类型检查
 */

// 重载1: 当第一个参数是 Error 对象时使用
export function debugWarn(error: Error): void;

// 重载2: 当第一个参数是字符串（作用域），第二个参数是字符串（消息）时使用
export function debugWarn(scope: string, msg: string): void;

/**
 * 调试警告函数实现
 * 在非生产环境下输出警告信息，生产环境中不执行任何操作
 * 主要用于开发时的调试和警告，不会影响生产环境的性能
 *
 * @param {string | Error} scope - 作用域名称或 Error 对象
 * @param {string} [msg] - 当第一个参数是字符串时，此参数为错误信息
 *
 * @example
 * // 使用方式1: 传入作用域和信息
 * debugWarn('Component', '组件已被弃用，请使用新版组件');
 *
 * // 使用方式2: 直接传入 Error 对象
 * try {
 *   // 一些可能出错的代码
 * } catch (err) {
 *   debugWarn(err);
 * }
 */
export function debugWarn(
  scope: string | Error, // 可以是作用域名称或 Error 对象
  msg?: string, // 可选参数，当第一个参数是字符串时使用
) {
  // 仅在非生产环境下执行，生产环境中此函数不执行任何操作
  // process.env.NODE_ENV 是 Node.js 环境变量，webpack 或 vite 等构建工具会自动设置
  if (process.env.NODE_ENV !== 'production') {
    // 创建错误对象
    const err = isString(scope) // 使用 lodash-es 的 isString 检查第一个参数是否为字符串
      ? new ErUIError(`[${scope}] ${msg}`) // 如果是字符串，创建新的 ErUIError
      : scope; // 如果第一个参数是 Error 对象，直接使用它

    // 使用 console.warn 输出警告信息
    // console.warn 在浏览器控制台会显示为黄色警告，更容易被开发者注意到
    console.warn(err);

    // 注意：这里使用 console.warn 而不是 console.error
    // 因为 debugWarn 用于非致命性警告，而 console.error 通常表示错误
  }
}
