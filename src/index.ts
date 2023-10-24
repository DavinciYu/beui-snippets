import * as vscode from 'vscode';
import { disposable } from './extension';
import { beuiProvider } from './completionProvider';

export function activate(context: vscode.ExtensionContext) {
  disposable(context).forEach(item=>{
    context.subscriptions.push(item);
  });
  context.subscriptions.push(beuiProvider);
}

export function deactivate() {}


// 菜单出现的位置
// 资源管理器上下文菜单： explorer/context
// 编辑器上下文菜单： editor/context
// 编辑标题菜单栏： editor/title
// 编辑器标题上下文菜单： editor/title/context
// 调试callstack视图上下文菜单： debug/callstack/context
// SCM标题菜单：scm/title
// SCM资源组菜单：scm/resourceGroup/context
// SCM资源菜单：scm/resource/context
// SCM更改标题菜单：scm/change/title
// 左侧视图标题菜单：view/title
// 视图项菜单：view/item/context
// 控制命令是否显示在命令选项板中：commandPalette