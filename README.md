## 开发过程中遇到的问题
1、按官网初始化项目运行调试之后，在命令行根据hellow搜索不到任何结果。
   原因： package.json里面的engines.vscode字段设置的版本号过高，当前本机的vscode版本没达到要求
   解决办法：升级vscode或者修改配置字段
2、当报command xxx not found错误时，有可能时配置的版本过低，需要将package.json里的activationEvents字段配上相应的命令 （Note: Extensions targeting VS Code versions prior to 1.74.0 must explicitly register an onCommand activationEvent for all user facing commands so that the extension activates and registerCommand executes）

vsce package