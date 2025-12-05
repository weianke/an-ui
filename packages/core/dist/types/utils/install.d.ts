import { Plugin } from 'vue';

type SFCWithInstall<T> = T & Plugin;
/**
 * 创建组件安装器
 * 用于批量安装多个组件插件
 * @param components - 组件插件数组
 * @returns 返回一个安装函数，可作为 Vue 插件使用
 */
export declare function makeInstaller(components: Plugin[]): Plugin;
/**
 * 为组件添加 install 方法
 * 使单个组件可以作为 Vue 插件被安装
 * @param component - 需要添加安装方法的组件
 * @returns 返回带有 install 方法的组件
 */
export declare const withInstall: <T>(component: T) => SFCWithInstall<T>;
export {};
