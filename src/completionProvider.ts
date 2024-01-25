import * as vscode from 'vscode';
import beComponents from './components/index';

export const beuiProvider = vscode.languages.registerCompletionItemProvider('vue', {
  provideCompletionItems() {        
    return [
      ['be-input', 'beInput'],
      ['be-select', 'beSelect'],
      ['be-table', 'beTable'],
      ['be-cascader', 'beCascader'],
      ['be-button', 'beButton'],
      ['be-checkbox', 'beCheckbox'],
      ['be-checkbox-group', 'beCheckboxGroup'],
      ['be-datePicker', 'beDatePicker'],
      ['be-dialog', 'beDialog'],
      ['be-form', 'beForm'],
      ['be-radio', 'beRadio'],
      ['be-radio-group', 'beRadioGroup'],
      ['be-searchTablePage', 'beSearchTablePage'],
      ['be-upload', 'beUpload']
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