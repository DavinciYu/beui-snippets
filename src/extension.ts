// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
const path = require('path');

const commandPrefix: string = 'beui-snippets.';
const filesList: Array<Record<string, string>> = [
  { command: commandPrefix+'beTable', fileName: 'table.vue'},
  { command: commandPrefix+'beInput', fileName: 'input.vue'},
  { command: commandPrefix+'beSelect', fileName: 'select.vue'},
  { command: commandPrefix+'beCascader', fileName: 'cascader.vue'},
  { command: commandPrefix+'beCheckbox', fileName: 'checkbox.vue'},
  { command: commandPrefix+'beDatePicker', fileName: 'datePicker.vue'},
  { command: commandPrefix+'beForm', fileName: 'form.vue'},
  { command: commandPrefix+'beRadio', fileName: 'radio.vue'}
];

const registerCommand = vscode.commands.registerCommand;
export const disposable = function() { 
  return filesList.map(item=>{
    return registerCommand(item.command, () => {
      handleFile(item.fileName);
    });
  });
};

function handleFile(fileName: string) {
  const componentsFile = vscode.Uri.file(path.join(__dirname, 'src', fileName));
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