const baseDocPaths = require('./baseDocPaths')

module.exports = {
  ...Object.assign({}, ...baseDocPaths.map((x) => ({[`${x.path}Sidebar`]: (
    [{ type: 'autogenerated', dirName: x.path }]
  )}))),
  sidebar: [{ type: 'autogenerated', dirName: '.' }],
};
