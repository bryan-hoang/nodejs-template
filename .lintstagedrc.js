const typeCheckCommand = () => 'npm run type-check';
const eslintCommand = 'npm run lint -- --fix';
const prettierCommand = 'npm run format -- --write';
const markdownlintCommand = 'npm run markdownlint -- --fix';

const typescriptFiles = '*.@(ts|tsx)';
const eslintableFiles = '*.@(ts|tsx|js)';
const markdownFiles = '*.@(md)';
const prettierableFiles = '*.@(md|json|svg|yaml)';

module.exports = {
  [typescriptFiles]: [typeCheckCommand],
  [eslintableFiles]: [eslintCommand],
  [markdownFiles]: [markdownlintCommand],
  [prettierableFiles]: [prettierCommand],
};
