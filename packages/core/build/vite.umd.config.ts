import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import { defineConfig } from 'vite';

// 使用 defineConfig 定义并导出 Vite 配置
export default defineConfig({
  // 插件配置：使用 Vue 插件来处理 .vue 文件
  plugins: [vue()],
  
  // 构建配置
  build: {
    // 输出目录：打包后的文件将放在 dist/umd 目录下
    outDir: 'dist/umd',
    // 库模式配置：用于构建库而不是应用
    lib: {
      // 入口文件：指定库的入口文件路径
      entry: resolve(__dirname, '../index.ts'),
      // 库的全局变量名：在 UMD 格式下，库将暴露为全局变量 window.AnUI
      name: 'AnUI',
      // 打包格式：只生成 UMD 格式（Universal Module Definition）
      formats: ['umd'],
      // 输出文件名：生成的文件名为 index.js（UMD格式）和 index.css
      fileName: 'index',
    },
    // Rollup 打包配置
    rollupOptions: {
      // 外部依赖：告诉 Rollup Vue 是外部依赖，不打包进库
      external: ['vue'],
      // 输出配置
      output: {
        // 导出方式：命名导出（named exports）
        exports: 'named',
        // 全局变量映射：指定外部依赖在 UMD 格式下的全局变量名
        globals: {
          vue: 'Vue' // 将 import 的 vue 映射到全局的 Vue 变量
        },
        // 资源文件命名策略
        assetFileNames: (assetInfo) => {
          // 如果生成的 CSS 文件名为 style.css，则重命名为 index.css
          if (assetInfo.name === 'style.css') return 'index.css';
          // 其他资源文件保持原名称
          return assetInfo.name as string;
        }
      }
    }
  }
});