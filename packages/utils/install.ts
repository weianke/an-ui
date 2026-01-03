import { each } from 'lodash-es';
import type { App, Directive, Plugin } from 'vue';

// 定义类型：带有 install 方法的组件类型
type SFCWithInstall<T> = T & Plugin;

/**
 * 创建组件安装器
 * 用于批量安装多个组件插件
 * @param components - 组件插件数组
 * @returns 返回一个安装函数，可作为 Vue 插件使用
 */
export function makeInstaller(components: Plugin[]) {
  // 创建一个安装函数，接收 Vue 应用实例
  const install = (app: App) =>
    each(components, (c) => {
      app.use(c); // 对每个组件调用 app.use 进行安装
    });
  // 将安装函数转换为 Plugin 类型返回
  return install as Plugin;
}

/**
 * 为组件添加 install 方法
 * 使单个组件可以作为 Vue 插件被安装
 * @param component - 需要添加安装方法的组件
 * @returns 返回带有 install 方法的组件
 */
export const withInstall = <T>(component: T) => {
  // 为组件添加 install 方法
  (component as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件的名称
    const name =
      (component as any)?.name || 'UnnamedComponent';
    // 将组件注册为全局组件
    app.component(name, component as SFCWithInstall<T>);
  };

  // 返回带有 install 方法的组件
  return component as SFCWithInstall<T>;
};
/**
 * 高阶函数包装器：将普通函数转换为支持Vue插件安装的格式
 * 这个函数允许我们将普通JavaScript函数作为Vue插件全局安装，使其可以通过Vue应用的全局属性访问
 *
 * @template T - 泛型参数，表示被包装函数的原始类型，确保类型安全
 * @param {T} fn - 需要被包装的原始函数，可以是任意JavaScript函数
 * @param {string} name - 在Vue应用中注册的全局属性名称
 * @returns {SFCWithInstall<T>} 返回一个带有install方法的函数，符合Vue插件规范
 *
 * @example
 * // 定义一个工具函数
 * const formatDate = (date) => dayjs(date).format('YYYY-MM-DD');
 *
 * // 包装为Vue插件
 * const formatDatePlugin = withInstallFunction(formatDate, '$formatDate');
 *
 * // 在Vue应用中使用
 * app.use(formatDatePlugin);
 *
 * // 在组件中通过全局属性访问
 * // this.$formatDate(new Date()) 或 app.config.globalProperties.$formatDate
 */
export const withInstallFunction = <T>(
  fn: T, // 需要转换为Vue插件的原始函数
  name: string, // 在全局属性中注册的名称，如 '$formatDate'
) => {
  // 使用类型断言将函数转换为SFCWithInstall类型，这样我们可以安全地添加install方法
  // 这里使用了类型断言，因为我们知道转换后的类型会有install属性
  (fn as SFCWithInstall<T>).install = (app: App) => {
    // install方法是Vue插件的标准接口
    // 当调用app.use()时，Vue会自动调用此方法
    // 将函数挂载到Vue应用的全局属性上，使其在所有组件中都可用
    app.config.globalProperties[name] = fn;
  };

  // 返回转换后的函数，现在它既保持了原始功能，又支持作为Vue插件安装
  return fn as SFCWithInstall<T>;
};

/**
 * 高阶函数包装器：将Vue指令转换为支持插件安装的格式
 * 这个函数允许我们将Vue指令作为插件全局安装，使其可以在所有组件模板中使用
 *
 * @template T extends Directive - 泛型参数，限制必须是继承自Directive的类型
 * @param {T} directive - 需要被包装的Vue指令对象，包含指令的生命周期钩子
 * @param {string} name - 指令的名称（使用时需要加上v-前缀）
 * @returns {SFCWithInstall<T>} 返回一个带有install方法的指令对象，符合Vue插件规范
 *
 * @example
 * // 定义一个自定义指令
 * const vFocus = {
 *   mounted(el) {
 *     el.focus();
 *   }
 * };
 *
 * // 包装为Vue插件
 * const focusDirective = withInstallDirective(vFocus, 'focus');
 *
 * // 在Vue应用中使用
 * app.use(focusDirective);
 *
 * // 在模板中使用
 * // <input v-focus />
 */
export const withInstallDirective = <T extends Directive>(
  directive: T, // 需要转换为Vue插件的原始指令对象
  name: string, // 指令名称，如 'focus'（实际使用为 v-focus）
): SFCWithInstall<T> => {
  // 使用类型断言将指令对象转换为SFCWithInstall类型
  // 这样我们可以安全地添加install方法，使其符合Vue插件规范
  (directive as SFCWithInstall<T>).install = (app: App) => {
    // 使用Vue应用的directive方法全局注册指令
    // 注册后，该指令可以在任何组件的模板中使用
    // Vue会自动处理指令的生命周期
    app.directive(name, directive);
  };

  // 返回转换后的指令对象，现在它既保持了原始指令功能，又支持作为Vue插件安装
  return directive as SFCWithInstall<T>;
};
