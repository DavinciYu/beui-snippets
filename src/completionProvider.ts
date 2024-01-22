import * as vscode from 'vscode';
import beComponents from './components/index';

export const beuiProvider = vscode.languages.registerCompletionItemProvider('vue', {
  provideCompletionItems() {        
    return [
      ['be-input', 'BeInput'],
      ['be-select', 'beSelect'],
      ['be-table', 'BeTable'],
      ['be-cascader', 'BeCascader'],
      ['be-button', 'BeButton'],
      ['be-checkbox', 'BeCheckbox'],
      ['be-checkbox-group', 'BeCheckboxGroup'],
      ['be-datePicker', 'BeDatePicker'],
      ['be-dialog', 'BeDialog'],
      ['be-form', 'BeForm'],
      ['be-radio', 'BeRadio'],
      ['be-radio-group', 'BeRadioGroup'],
      ['be-searchTablePage', 'BeSearchTablePage'],
      ['be-upload', 'BeUpload']
    ].map(item=>{
      return {
        detail: item[0],
        kind: vscode.CompletionItemKind.Method,
        filterText: item[0],
        label: item[0],
        insertText: beComponents[item[1]]
      };
    });
  },
},
"be-"
);