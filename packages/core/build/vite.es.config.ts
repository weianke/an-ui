import vue from '@vitejs/plugin-vue';
import { readdirSync } from "fs"; // Node.js 的文件系统模块，用于同步读取目录内容
import { filter, includes, map } from "lodash-es"; // 从 lodash-es 导入工具函数，lodash-es 是 ES 模块版本的 lodash，适合打包工具使用
import { resolve } from 'path'; // Node.js 的路径模块，用于解析绝对路径
import { defineConfig } from 'vite'; // Vite 的配置定义函数
import dts from 'vite-plugin-dts'; // Vite 插件，用于生成 TypeScript 声明文件（.d.ts）

/**
 * 同步获取指定目录下的所有子目录名称
 * @param basePath - 要扫描的基础目录路径
 * @returns 返回包含所有子目录名称的数组
 */
function getDirectoriesSync(basePath: string) {
  // 同步读取目录条目，withFileTypes: true 返回 Dirent 对象而非字符串
  const entries = readdirSync(basePath, { withFileTypes: true });
  
  // 使用 lodash 函数式编程风格：
  // 1. filter: 筛选出目录类型的条目
  // 2. map: 将 Dirent 对象转换为目录名称字符串
  return map(
    filter(entries, (entry) => entry.isDirectory()),
    (entry) => entry.name
  );
}

// 使用 defineConfig 定义并导出 Vite 配置
export default defineConfig({
  // 插件配置：使用 Vue 插件来处理 .vue 文件
  plugins: [
    vue(), // Vue 单文件组件支持插件
    dts({ // TypeScript 声明文件生成插件
      tsconfigPath: "../../tsconfig.build.json", // 指定构建专用的 TypeScript 配置文件
      outDir: "dist/types" // 声明文件输出目录，与组件源码分离
    }) as any // 强制类型转换，避免类型不匹配错误
  ],
  
  // 构建配置 - 库模式：用于构建可发布的组件库而非应用
  build: {
    // 输出目录：打包后的文件将放在 dist/es 目录下（ES 模块格式）
    outDir: 'dist/es',
    
    // 库模式配置：用于构建库而不是应用
    lib: {
      // 入口文件：指定库的入口文件路径，使用 resolve 获取绝对路径
      entry: resolve(__dirname, '../index.ts'),
      // 库的全局变量名：在 UMD 格式下，库将暴露为全局变量 window.AnUI
      // 注意：虽然 formats 只配置了 'es'，但此选项对某些构建工具仍有参考价值
      name: 'AnUI',
      // 打包格式：只生成 ES 格式（ES Module），现代打包工具推荐格式
      formats: ['es'],
      // 输出文件名：生成的文件名为 index.js
      fileName: 'index',
    },
    
    // Rollup 打包配置（Vite 使用 Rollup 作为构建引擎）
    rollupOptions: {
      // 外部依赖：告诉 Rollup 这些是外部依赖，不打包进库，由使用者提供
      external: [
        'vue', // Vue 框架本身
        "@fortawesome/fontawesome-svg-core", // FontAwesome 图标库核心
        "@fortawesome/free-solid-svg-icons", // FontAwesome 实体图标集
        "@fortawesome/vue-fontawesome", // FontAwesome 的 Vue 组件
        "@popperjs/core", // Popper.js 弹出定位库
        "async-validator" // 表单验证库
      ],
      
      // 输出配置
      output: {
        // 资源文件命名策略
        assetFileNames: (assetInfo) => {
          // 如果生成的 CSS 文件名为 style.css，则重命名为 index.css
          // 这样可以让库的使用者通过 import 'AnUI/index.css' 引入样式
          if (assetInfo.name === 'style.css') return 'index.css';
          // 其他资源文件（如图片、字体等）保持原名称
          return assetInfo.name as string;
        },
        
        /**
         * 手动代码分割配置 - 将代码拆分为多个 chunk（块）
         * 这有助于优化加载性能，实现按需加载
         * @param id - 模块的完整路径
         * @returns 返回 chunk 名称，如果不分割则返回 undefined
         */
        manualChunks(id) {
          // 1. 将所有 node_modules 中的依赖打包到 vendor chunk
          //    这样可以利用浏览器缓存，当依赖不改变时，vendor chunk 可以被缓存
          if (includes(id, "node_modules")) return "vendor";
          
          // 2. 将所有 hooks 目录下的代码打包到 hooks chunk
          //    hooks 通常是可复用的逻辑，单独打包便于按需加载
          if (includes(id, "/packages/hooks")) return "hooks";
          
          // 3. 将所有 utils 目录下的代码打包到 utils chunk
          //    包括工具函数和 Vue 插件的导出助手
          if (
            includes(id, "/packages/utils") ||
            includes(id, "plugin-vue:export-helper")
          ) return "utils";
          
          // 4. 按组件目录进行分割：每个组件目录打包为独立的 chunk
          //    这样可以实现组件的按需加载，只加载使用到的组件
          //    遍历 ../components 目录下的所有子目录
          for (const item of getDirectoriesSync("../components")) {
            // 如果模块路径包含组件目录名，则将其归入该组件的 chunk
            if (includes(id, `/packages/components/${item}`)) return item;
          }
          
          // 如果不符合以上条件，则不进行特殊分割，由 Rollup 自动处理
        }
      }
    }
  }
});