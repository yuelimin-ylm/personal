module.exports = {
  '*.{js,jsx,ts,tsx,vue}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{css,scss,postcss,less}': ['prettier --write'],
  '*.md': ['prettier --write']
};
