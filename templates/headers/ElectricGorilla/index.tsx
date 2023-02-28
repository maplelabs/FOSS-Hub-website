/**
 * Files generated using template generator
 */
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { ElectricGorillaProps } from './config';
import styles from './styles.module.css';

export default function ElectricGorilla({title, text, logo, favicon, show, menu}:ElectricGorillaProps) {
    return <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={text} />
        <link rel="icon" href={favicon} />
    </Head>
    <div data-uk-sticky="start: 0" id="nav" className="nav-bg">
        <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
            <div className=" uk-container " data-uk-navbar>
                <div className="uk-navbar-left">
                    <Link href="/" className="uk-navbar-item uk-logo">
                        <Image src={logo.darkMode} width={0} height={0} alt={logo.alternateText} className='dark-img uk-width-medium'></Image>
                        <Image src={logo.lightMode} width={0} height={0} alt={logo.alternateText} className='light-img uk-width-medium'></Image>
                    </Link>
                </div>
                {show &&<div className="uk-navbar-right uk-visible@m ">
                    <ul className='uk-navbar-nav'>
                       { menu.map((item, index) =>
                            <li key={index}>
                                <a href={item.path} data-uk-scroll='offset:80' className="uk-text-capitalize">{item.title}</a>
                            </li>
                        )}
                    </ul>
                </div>}
            </div>
        </nav>
    </div>
</>
}
