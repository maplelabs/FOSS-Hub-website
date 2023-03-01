const {
  uniqueNamesGenerator,
  adjectives,
  animals,
} = require('unique-names-generator');
const inquirer = require('inquirer');
const config = {
  length: 2,
  separator: '',
  dictionaries: [adjectives, animals],
  style: 'capital',
};

module.exports = function (plop) {
  plop.setGenerator('Templates', {
    description:
      'Creates template files : Component, styles, types and storybook',
    prompts: async function (inquirer) {
      const negative = 'Give me something different...';
      let { type } = await inquirer.prompt({
        type: 'list',
        name: 'type',
        choices: ['Sections', 'Headers', 'Footers', 'Pages'],
        message: 'Please select the type of template',
      });
      let nameAns = negative;
      while (nameAns == negative) {
        let { name } = await inquirer.prompt({
          type: 'list',
          name: 'name',
          message: 'Do you want template created by name',
          choices: () => [
            uniqueNamesGenerator(config),
            new inquirer.Separator(),
            negative,
          ],
        });
        nameAns = name;
      }
      let { category } =
        type == 'Sections'
          ? await inquirer.prompt({
              type: 'checkbox',
              name: 'category',
              choices: [
                'Cards',
                'Banner',
                'Covers',
                'Lists',
                'Tables',
                'Grids',
                new inquirer.Separator(),
                'Others',
              ],
              message: 'Select what your templates contain (max 2)',
              loop: false,
            })
          : { category: [] };

      if (category.includes('Others')) {
        category = category.filter((i) => i != 'Others');
        let { otherDesc } = await inquirer.prompt({
          type: 'input',
          name: 'otherDesc',
          message: 'Specify what others mean',
        });
        otherDesc && category.unshift(otherDesc);
      }
      return {
        type,
        name: nameAns,
        tags: category.slice(0, 2),
      };
    },
    actions: (data) => {
      const pattern_module = new RegExp(
        `// ${data.type.toUpperCase()} EXPORTS`,
        'g'
      );
      const pattern_config = new RegExp(
        `// ${data.type.toUpperCase()} SCHEMAS`,
        'g'
      );
      return [
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
        {
          path: 'templates/templates.module.ts',
          pattern: /(\/\/ COMPONENT IMPORTS)/g,
          template:
            "import {{pascalCase name}} from './{{lowerCase type}}/{{pascalCase name}}';",
          type: 'append',
        },
        {
          path: 'templates/templates.module.ts',
          pattern: pattern_module,
          template: '\t\t{{pascalCase name}},',
          type: 'append',
        },
        {
          path: 'config.d.ts',
          pattern: /(\/\/ SCHEMAS IMPORTS)/g,
          template:
            "import { {{pascalCase name}}Schema } from './templates/{{lowerCase type}}/{{pascalCase name}}/config';",
          type: 'append',
        },
        {
          path: 'config.d.ts',
          pattern: pattern_config,
          template: '\t{{pascalCase name}}Schema |',
          type: 'append',
        },
      ];
    },
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
