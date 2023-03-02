import Image from 'next/image';
/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React, { useEffect } from 'react';
import uikit from 'uikit';

import { ElectricGorillaProps } from './config';
import styles from './styles.module.css';

export default function ElectricGorilla({ logo,  menu}:ElectricGorillaProps) {
    useEffect(() => {
        const el = uikit.util.$('#intro-section');
        const nav = uikit.util.$('#nav');
        uikit.sticky(nav);
        uikit.scrollspy(el, { repeat: true, delay: 0 });
        uikit.util.on(el, 'outview', function () {
          nav.classList.add('nav-bg');
          nav.classList.remove('nav-bg-dark');          
        });
        uikit.util.on(el, 'inview', function () {
          nav.classList.add('nav-bg-dark');
          nav.classList.remove('nav-bg');
        });
      }, []);
    return <>

    <div data-uk-sticky="start: 0" id="nav" className="nav-bg">
        <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
            <div className=" uk-container " data-uk-navbar>
                <div className="uk-navbar-left">
                    <Link href="/" className="uk-navbar-item uk-logo">
                        <Image src={logo.lightMode} width={0} height={0} alt='logo' className='dark-img uk-width-medium'></Image>
                        <Image src={logo.darkMode} width={0} height={0} alt='logo' className='light-img uk-width-medium'></Image>
                    </Link>
                </div>
                <div className="uk-navbar-right uk-visible@m ">
                    <ul className='uk-navbar-nav'>
                       { menu.map((item, index) =>
                            <li key={item.title}>
                                <a href={item.path} data-uk-scroll='offset:80' className="uk-text-capitalize">{item.title}</a>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</>
}
