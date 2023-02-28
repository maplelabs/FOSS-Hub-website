## Guidelines for contributing

The OpenSource Team and Development Team at MapleLabs welcome contributions to this repository.

If you'd like to to make code contributions, or make content contributions locally, follow the contribution guidelines below.

## Getting started

### Local development

You can serve this site locally to quickly see your changes and additions before you PR them. To get started, navigate into your new site’s directory and start it up, as follows.

```shell
cd opensource-portal/
yarn
yarn start
```

Your site is now running at [`http://localhost:3000`](http://localhost:3000)!

The first time you build the site locally, it will take upwards of 5 minutes. This is normal, and will take signifigantly less time afterwards.

### Dependencies

Node v18 is used in this project as specified in [.nvmrc](https://github.com/newrelic/developer-website/blob/master/.nvmrc).

### Cloning vs forking

To be able to [clone](https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository) this repository and contribute you will need to be given write access to the repository. Contact the MapleLabs Development team if you need write access. Permission for write access is reserved with MapleLabs.

To contribute without write access, you can [fork](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) the repository and contribute as needed. If you're planning to leave a fork open for a long time (for example, you're working on a complex set of changes), [sync your fork](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/syncing-a-fork) occasionally to avoid merge conflicts.

### Want to Contribute to this repo?

To contribute to this repo, please follow these steps:

1. Fork the repository by clicking the "Fork" button on the top right corner of the repository page.
2. Clone the forked repository to your local machine using git clone https://github.com/[your-username]/[Project Name].git
3. Create a new branch for your changes using git checkout -b [new-branch-name]
4. Make your changes and commit them using descriptive commit messages.
5. Push your changes to the new branch on your forked repository using git push origin [new-branch-name]
6. Create a pull request by clicking the "New Pull Request" button on the original repository page.
7. Wait for the project maintainers to review your pull request and merge it if it meets the project guidelines.

This is a template driven codebase where we encourage developers to create new reusable templates which can be used to render the UI. Please feel free to create generic templates which serves the purpose of rendering our content.

Please follow these setps to generate the boiler plate code for the template: 

```shell
cd FOSS-website/
yarn
yarn gen
```

### Getting Help

If you have any questions or need help with contributing to our project, please reach out to us through opensource@maplelabs.com. 

We appreciate your interest in contributing to FOSS-website and look forward to collaborating with you!
