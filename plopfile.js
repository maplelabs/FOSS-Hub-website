module.exports = function (plop) {
  plop.setGenerator('Templates', {
    description:
      'Creates template files : Component, styles, types and storybook',
    prompts: [
      {
        type: 'list',
        name: 'type',
        choices: ['Sections', 'Pages'],
        message: 'Please select the type of template',
      },
      {
        type: 'input',
        name: 'name',
        message: 'Please enter the template name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'templates/{{lowerCase type}}/{{pascalCase name}}/index.tsx',
        templateFile: '.plop-templates/templates.sections.index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'templates/{{lowerCase type}}/{{pascalCase name}}/config.d.ts',
        templateFile: '.plop-templates/templates.sections.config.d.ts.hbs',
      },
      {
        type: 'add',
        path: 'templates/{{lowerCase type}}/{{pascalCase name}}/styles.module.css',
      },
      {
        type: 'add',
        path: 'templates/{{lowerCase type}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: '.plop-templates/templates.sections.stories.tsx.hbs',
      },
    ],
  });
  plop.setGenerator('Components', {
    description: 'Creates React components with styles module',
    prompts: [
      // {
      //   type: 'input',
      //   name: 'name',
      //   message: 'controller name pleasekjnkj',
      // },
    ],
    actions: [
      // {
      //   type: 'add',
      //   path: 'src/{{name}}.js',
      //   templateFile: '.plop-templates/controller.hbs',
      // },
    ],
  });
};
