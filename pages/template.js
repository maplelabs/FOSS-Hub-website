import { useEffect } from 'react';
import uikit from 'uikit';
import UIKit from '../components/uikit';
import config from '../template.config';
import Components from '../templates/templates.module';

export default function Template({ header, sections, footer }) {
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

export async function getStaticProps() {
  const extractTemplate = async (item) => {
    const dynamicData = item.dynamicData ? await item.dynamicData() : {};
    return {
      template: item.template,
      props: { ...item.data, ...dynamicData },
    };
  };
  const sections = await Promise.all(config.body.sections.map(extractTemplate));
  const header = config.header ? await extractTemplate(config.header) : null;
  const footer = config.footer ? await extractTemplate(config.footer) : null;
  return { props: { header, sections, footer } };
}
