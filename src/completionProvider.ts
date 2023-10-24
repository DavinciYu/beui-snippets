import * as vscode from 'vscode';
import beComponents from './components/index';

export const beuiProvider = vscode.languages.registerCompletionItemProvider('vue', {
  provideCompletionItems() {        
    return [
        {
            detail: 'be-input',
            kind: vscode.CompletionItemKind.Method,
            filterText: `be-input`,
            label: 'be-input',
            insertText: beComponents.beInput
        },
        {
            detail: 'be-select',
            kind: vscode.CompletionItemKind.Method,
            filterText: `be-select`,
            label: 'be-select',
            insertText: beComponents.beSelect
        },
        {
            detail: 'be-table',
            kind: vscode.CompletionItemKind.Method,
            filterText: `be-table`,
            label: 'be-table',
            insertText: beComponents.beTable
        },
        {
            detail: 'be-cascader',
            kind: vscode.CompletionItemKind.Method,
            filterText: `be-cascader`,
            label: 'be-cascader',
            insertText: beComponents.beCascader
        }
    ];
  },
},
"be-"
);