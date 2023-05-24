module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 120,
  singleQuote: true,
  trailingComma: 'all',
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  importOrder: ['^@core/(.*)$', '^@server/(.*)$', '^@ui/(.*)$', '^[./]'],
};
