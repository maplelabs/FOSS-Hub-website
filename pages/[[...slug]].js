import Head from 'next/head';
import UIKit from '../components/uikit';
import config from '../main.config';
import Components from '../templates/templates.module';

export default function Template({ meta, header, sections, footer }) {
  const Header = ({ template, props }) => {
    const Component = Components.headers[template];
    return <Component {...props}></Component>;
  };
  const Footer = ({ template, props }) => {
    const Component = Components.footers[template];
    return <Component {...props}></Component>;
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description}></meta>
        <meta name="robots" content={meta.robots}></meta>
        <link rel="icon" href={meta.favicon} />
      </Head>
      <main>
        {header ? <Header {...header}></Header> : null}
        {sections.map(({ template, props }, index) => {
          const Component = Components.sections[template];
          return <Component key={index} {...props}></Component>;
        })}
        {footer ? <Footer {...footer}></Footer> : null}
      </main>
    </div>
  );
}
Template.getLayout = (page) => <UIKit>{page}</UIKit>;

export async function getStaticPaths() {
  const paths = await getAllPaths(config);
  return {
    // paths: [{ params: { slug: ['temp', 'blogs'] } }],
    paths: paths.map((path) => ({ params: { slug: path } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { slug } = context.params;
  const extractTemplate = async (item) => {
    const dynamicData = item.dynamicData ? await item.dynamicData(context) : {};
    return {
      template: item.template,
      props: { ...item.data, ...dynamicData },
    };
  };
  let pageConfig = config;
  await Promise.all(
    slug?.map(async (page) => {
      let pages = [];
      if (pageConfig.pages instanceof Function) {
        pages = await pageConfig.pages();
      } else {
        pages = pageConfig.pages;
      }
      pageConfig = {
        ...{ ...pageConfig, body: { sections: [] } },
        ...pages[page],
      };
    }) || []
  );
  const meta = pageConfig.meta;
  const sections = await Promise.all(
    pageConfig?.body?.sections.map(extractTemplate) || []
  );
  const header = pageConfig?.header
    ? await extractTemplate(pageConfig.header)
    : null;
  const footer = pageConfig?.footer
    ? await extractTemplate(pageConfig.footer)
    : null;
  return { props: { meta, header, sections, footer } };
}

const getAllPaths = async (config) => {
  const paths = [[]];
  const getPages = async (pages, slugs = []) => {
    Object.entries(pages || {}).forEach(async ([slug, config]) => {
      const lst = [...slugs];
      lst.push(slug);
      config.body && paths.push(lst);
      let pages = [];
      if (config.pages instanceof Function) {
        pages = await config.pages();
      } else {
        pages = config.pages;
      }
      await getPages(pages, lst);
    });
  };
  await getPages(config.pages);
  return paths;
};
