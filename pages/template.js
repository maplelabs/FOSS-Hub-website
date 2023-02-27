import { useEffect } from 'react';
import uikit from 'uikit';
import UIKit from '../components/uikit';
import config from '../template.config';
import Components from '../templates/templates.module';

export default function Template({ sections }) {
  useEffect(() => {
    const el = uikit.util.$('#intro-section');
    const nav = uikit.util.$('#nav');
    var sticky = uikit.sticky(nav);
    uikit.scrollspy(el, { repeat: true, delay: 0 });
    uikit.util.on(el, 'outview', function () {
      console.log('out');
      nav.classList.add('nav-bg');
      nav.classList.remove('nav-bg-dark');
      // nav.classList.add('')
    });
    uikit.util.on(el, 'inview', function () {
      console.log('in');
      nav.classList.add('nav-bg-dark');
      nav.classList.remove('nav-bg');
    });
  }, []);

  return (
    <div>
      <main>
        {sections.map(([template, props], index) => {
          const Component = Components.sections[template];
          return <Component key={index} {...props}></Component>;
        })}
      </main>
    </div>
  );
}
Template.getLayout = (page) => <UIKit>{page}</UIKit>;

export async function getStaticProps() {
  const sections = config.body.sections.map((item) => [
    item.template,
    item.data,
  ]);
  return { props: { sections } };
}
