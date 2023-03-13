## Creating Your Institution's OpenSource Website with FOSS-HUB-website

Here are the steps to get started:

## Step 1: Fork the FOSS-HUB-website Repository

The first step is to fork the FOSS-HUB-website repository to your GitHub account. To do this, simply click the "Fork" button in the top right-hand corner of the repository page.

## Step 2: Configure Your Website

Run your local server:

```bash
yarn
yarn dev
```

Once you've forked the repository, you can begin configuring your website by using the templates and adding your own content. 
All the pre-defined templates are present inside templates folder. You can make use of these templates to create your website or create new templates (sections/header/footer).

Generate templates by running the below command : 

```bash
yarn gen
```

The templates can be checked using the Storybook feature. Please follow these setps to host storybook : 

```bash
cd FOSS-HUB-website/
yarn
yarn storybook
```
The storybook will be running at [`http://localhost:6006`](http://localhost:6006)

The main.config.ts file contains all the necessary configuration settings and static content for your website. Make any necessary adjustments to ensure your website accurately reflects your institution.

## Step 3: Deploy Your Website with Vercel.app

Now that you've configured your website, it's time to deploy it using Vercel.app. Here are the steps to deploy your website:

1. Create a free account on Vercel.app.
2. Connect your GitHub account to Vercel.app.
3. Choose the FOSS-HUB-website repository and the branch you want to deploy.
4. Follow the prompts to configure your deployment settings.
5. Wait for Vercel.app to deploy your website.

Congratulations! You've successfully deployed your institution's OpenSource website with FOSS-HUB-website and Vercel.app. From here, you can continue to customize your website and make any necessary adjustments to ensure it meets your institution's needs.