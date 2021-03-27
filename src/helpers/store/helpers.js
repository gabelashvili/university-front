const allModules = require.context('modules', true, /index.js$/);

export default () => {
  const reducers = {};
  const sagas = [];
  allModules.keys().forEach((filename) => {
    const ctx = allModules(filename);
    if (ctx && ctx.moduleName) {
      const key = ctx.moduleName;
      reducers[key] = ctx.reducers;
      if (ctx.sagas) {
        sagas.push(ctx.sagas);
      }
    }
  });
  return { reducers, sagas };
};
