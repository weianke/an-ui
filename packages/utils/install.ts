import { each } from 'lodash-es';
import type { App, Plugin } from 'vue';

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
    const name = (component as any)?.name || "UnnamedComponent";
    // 将组件注册为全局组件
    app.component(name, component as SFCWithInstall<T>);
  };
  
  // 返回带有 install 方法的组件
  return component as SFCWithInstall<T>;
}