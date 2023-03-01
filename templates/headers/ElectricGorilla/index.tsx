/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React, { useEffect } from 'react';
import Image from 'next/image';
import { ElectricGorillaProps } from './config';
import styles from './styles.module.css';
import uikit from 'uikit';

export default function ElectricGorilla({ logo,  menu}:ElectricGorillaProps) {
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
                            <li key={index}>
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
