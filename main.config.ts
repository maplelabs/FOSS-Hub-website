import Config from './config';
import blogService from './services/BlogService';
import githubService from './services/GithubService';

const config: Config = {
  render: 'static',
  meta: {
    title: 'OpenSource @ MapleLabs',
    description:
      'Get involved in open source communities, discover projects and learn about MapleLabs opensource program.',
    robots: 'index, follow',
    favicon: '/favicon.png',
  },
  header: {
    id: 'index-header',
    template: 'ElectricGorilla',
    data: {
      id: 'nav',   
      scrollSpySelector: 'intro-section',
      logo: {
        darkMode: '/images/dark-logo.svg',
        lightMode: '/images/light-logo.svg',
      },
      menu: [
        {
          title: 'Projects',
          path: '#projects',
        },
        {
          title: 'Getting Started',
          path: '#getstarted',
        },
        {
          title: 'Blogs',
          path: '#blogs',
        },
      ],
    },
  },
  body: {
    sections: [
      {
        id: 'intro-section',
        template: 'AggressiveClownfish',
        data: {
          id: 'intro-section',
          title1: 'Embracing Collaboration.',
          title2: 'Embracing Open Source.',
          description:
            "We at MapleLabs believe open source solves real-world problems. We are a passionate, open-minded and focused group of software enthusiasts pushing boundaries with an aim to contribute back to open-source by developing value adding applications, tools, plugins, utilities, etc relevant to company's product/services' offerings.",

          button: {
            text: 'MapleLabs on Github',
            icon: 'github',
            url: 'https://github.com/maplelabs',
          },
          backgroundImage: '../../../images/background_intro.svg',
        },
      },
      {
        id: 'featured-projects',
        template: 'GoodFox',
        data: {
          id: 'projects',
          title: 'Featured Projects',
          columnHeaders: [
            {
              name: 'Project Name',
              className: 'uk-width-large',
            },
            {
              name: 'Tech Stack',
              className: 'uk-width-small',
            },
            {
              name: 'Category',
              className: 'uk-width-small',
            },
            {
              name: 'Tags',
              className: 'uk-width-small',
            },
            {
              name: 'Contributors',
            },
          ],
        },
        dynamicData: async () => {
          const [featuredProjects] = await githubService.getHomePageData();
          const listItems = featuredProjects.map((project) => ({
            title: project.name || project.login,
            description: project.description,
            link: project.html_url,
            languages: project.languages || [],
            icon: project.icon,
            contributors: project.top_contributors?.map((user) => ({
              name: user.login,
              src: user.avatar_url,
              link: user.html_url,
            })),
          }));
          return { listItems };
        },
      },
      {
        id: 'discord',
        template: 'SpotlessAntelope',
        data: {
          id: 'getstarted',
          title: 'Getting Started',
          subtitle:
            'You can get started by choosing a project you want to use/contribute-to and go to the respective github link.',
          description:
            'It is easy to get started if you join our open source discord community',
          button: {
            text: 'Click to join',
            url: 'https://discord.gg/XQudKrsmdk',
          },
          image: {
            url: '/images/questions.svg',
          },
        },
      },
      {
        id: 'featured-blogs',
        template: 'UltimateCardinal',
        data: {
          id: 'blogs',
          title: 'Blogs',
        },
        dynamicData: async () => {
          const cards = blogService.getBlogs().map(({ slug, frontMatter }) => ({
            title: frontMatter.title,
            thumbnail: frontMatter.thumbnail || frontMatter.banner,
            author: frontMatter.author,
            authorAvatar: frontMatter.authorAvatar,
            slug: slug,
          }));
          return { cards };
        },
      },
      {
        id: 'top-contributors',
        template: 'RainyCoral',
        data: {
          id: 'top-contributors',
          title: 'Top Contributors',
          description:
            'Meet our contributors who believe in the notion that open source brings the best out in people. Join us in building the future with open source.',
        },
        dynamicData: async () => {
          const [, topContributors] = await githubService.getHomePageData();
          const tiles = topContributors.map((item) => ({
            id: item.login,
            title: item.name || item.login,
            subtitle: item._repo[0],
            avatar: item.avatar_url,
            link: {
              icon: 'github',
              text: 'View on GitHub',
              url: item.html_url,
            },
          }));
          return { tiles };
        },
      },
      {
        id: 'featured-videos',
        template: 'MiniatureAardwolf',
        data: {
          id: 'featured-videos',
          title: 'Featured Videos',
          medias: [
            {
              url: 'https://www.youtube.com/watch?v=JLmei2IUDm0',
              text: 'What, Why And How Of Open Source',
              thumbnail: '/images/videos/what-why-how-opensource.svg',
            },
          ],
        },
      },
    ],
  },
  footer: {
    id: 'footer',
    template: 'SmallDragon',
    data: {
      id: 'footer',
      copyRight: `Copyright © 2023 MapleLabs. All rights reserved.`,
      address: [
        {
          name: 'INDIA OFFICE',
          address:
            '152, Siddhi Vinayak Towers, Sarjapur - Marathahalli Road, Jakkasandra, 1st Block, Koramangala, Bangalore – 560034',
        },
        {
          name: 'USA OFFICE',
          address: '1248 Reamwood Ave, Sunnyvale, CA 94089',
        },
      ],
      terms: [
        {
          text: 'Privacy Policy',
          url: 'https://www.maplelabs.com/privacy_policy.html',
        },
        {
          text: 'Terms of Use',
          url: 'https://www.maplelabs.com/terms.html',
        },
        {
          text: 'Cookie Policy',
          url: 'https://www.maplelabs.com/cookies.html',
        },
      ],
      subSections: [
        {
          title: 'SERVICES',
          list: [
            {
              text: 'Performance Engineering',
              url: 'https://www.maplelabs.com/performance-engineering.html',
            },
            { text: 'Dev Ops', url: 'https://www.maplelabs.com/devops.html' },
            {
              text: 'Site Reliability Engineering',
              url: 'https://www.maplelabs.com/sreops.html',
            },
            {
              text: 'Implementation Services',
              url: 'https://www.maplelabs.com/services.html',
            },
          ],
        },
        {
          title: 'COMPANY',
          list: [
            {
              text: 'Our Products',
              url: 'https://www.snappyflow.io/',
            },
            {
              text: 'What we do?',
              url: 'https://www.maplelabs.com/index.html',
            },
            {
              text: 'Careers',
              url: 'https://jobs.maplelabs.com/jobs/Careers',
            },
            {
              text: 'Contact Us',
              url: 'https://www.maplelabs.com/getstarted.html',
            },
          ],
        },
      ],
      social: {
        title: 'CONNECT SOCIAL',
        list: [
          {
            text: 'linkedin',
            url: 'https://in.linkedin.com/company/maplelabs-cloud-solutions',
          },
          {
            text: 'instagram',
            url: 'https://www.instagram.com/maplelabs',
          },
        ],
      },
    },
  },
  pages: {
    blogs: {
      pages: async () => {
        const blogs = blogService.getBlogs();
        const pages = {};
        blogs.forEach(
          (blog) =>
            (pages[blog.slug] = {
              header: {
                id: `header-${blog.slug}`,
                template: 'ElectricGorilla',
                data: {
                  id: 'nav',
                  logo: {
                    darkMode: '/images/dark-logo.svg',
                    lightMode: '/images/light-logo.svg',
                  },
                  menu: [],
                },
              },
              body: {
                sections: [
                  {
                    id: `blog-content-${blog.slug}`,
                    template: 'AnnualFish',
                    dynamicData: async ({ params: { slug } }) => {
                      const { frontMatter, content } =
                        blogService.getBlogContents([...slug].pop());
                      const recentBlogs =
                        blogService.getRecentBlogs(frontMatter);
                      return { frontMatter, content, recentBlogs };
                    },
                  },
                ],
              },
            })
        );
        return pages;
      },
    },
  },
};

export default config;
