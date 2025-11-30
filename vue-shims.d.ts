import 'vue'

declare module 'vue' {
  interface ComponentCustomOptions {
    // 如果需要其他选项，可以扩展
  }
}

// 声明 defineOptions 宏（针对 Vue 宏的 TS 支持）
declare function defineOptions(options: any): void;