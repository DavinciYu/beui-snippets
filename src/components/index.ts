const modulesFiles = require.context('./', true, /\.ts$/);
const modules = modulesFiles.keys().reduce((modules: Record<string, any>, modulePath: string) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  const value = modulesFiles(modulePath);
  modules[moduleName] = value.default;
  return modules;
}, {});

export default modules;
