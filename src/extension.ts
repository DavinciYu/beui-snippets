// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// const path = require('path');

const registerCommand = vscode.commands.registerCommand;
export const disposable = function(context: vscode.ExtensionContext) { 
  return [
    registerCommand('beui-snippets.beTable', () => {
      handleFile('/table.vue', context);
    }),
    registerCommand('beui-snippets.beInput', () => {
      handleFile('/input.vue', context);
    }),
    registerCommand('beui-snippets.beSelect', () => {
      handleFile('/select.vue', context);
    }),
    registerCommand('beui-snippets.beCascader', () => {
      handleFile('/cascader.vue', context);
    })
  ];
};

function handleFile(fileName: string, context: vscode.ExtensionContext) {
  // console.log('yyy', context.extensionPath );
  const componentsFile = vscode.Uri.file(context.extensionPath + '/src/demoFiles' + fileName);
  editOpenedFileInWindow(componentsFile);
}

export function editOpenedFileInWindow(filePath: vscode.Uri) {
  // 获取 vscode.TextDocument对象
  vscode.workspace.openTextDocument(filePath).then(doc => {
    // 获取 vscode.TextEditor对象
    vscode.window.showTextDocument(doc).then(editor => {
      // 获取 vscode.TextEditorEdit对象， 然后进行字符处理
      editor.edit(editorEdit => {
        // 这里可以做以下操作: 删除, 插入, 替换, 设置换行符
        // 以插入字符串为例: "Hello Word\r\n"
        // editorEdit.insert(new vscode.Position(0, 0), "Hello Word\r\n");
      }).then(isSuccess => {
          if (isSuccess) {
            console.log("Edit successed");
          } else {
            console.log("Edit failed");
          }
        }, err => {
          console.error("Edit error, " + err);
        });
      });
    }).then(undefined, err => {
      console.error(err);
    });
}

export function openLocalFile(filePath: string) {
  // 获取TextDocument对象
  vscode.workspace.openTextDocument(filePath).then(doc => {
    // 在VSCode编辑窗口展示读取到的文本
    vscode.window.showTextDocument(doc);
  }, err => {
    console.log(`Open ${filePath} error, ${err}.`);
  }).then(undefined, err => {
    console.log(`Open ${filePath} error, ${err}.`);
  });
}