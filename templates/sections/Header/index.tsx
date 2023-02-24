/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import { HeaderProps } from './config';
import styles from './styles.module.css';
import Head from 'next/head';

export default function Header({ title, text, logo, show, menu }: HeaderProps) {
    return <>
        <Head>
            <title>{title}</title>
            <meta name="description" content={text} />
            <link rel="icon" href='/images/favicon.png' />
        </Head>
        <div data-uk-sticky="start: 0" id="nav" className="nav-bg">
            <nav className="uk-navbar-container uk-navbar-sticky uk-navbar-transparent uk-light uk-width-1-1">
                <div className=" uk-container " data-uk-navbar>
                    <div className="uk-navbar-left">
                        <Link href="/" className="uk-navbar-item uk-logo">
                            <Image src={logo.darkMode} width={310} height={40} alt={logo.alternateText} className='dark-img'></Image>
                            <Image src={logo.lightMode} width={310} height={40} alt={logo.alternateText} className='light-img'></Image>
                            {/* <hr className="uk-divider-vertical uk-margin-small-left"></hr>
              <div className="uk-text-bolder uk-text-default uk-margin-small-left">
                OPEN SOURCE
              </div> */}
                        </Link>
                    </div>
                    {show &&<div className="uk-navbar-right uk-visible@m ">
                        <ul className='uk-navbar-nav'>
                           { menu.map((item, index) =>
                                <li key={index}>
                                    <a href={item.path} data-uk-scroll='offset:80' className="uk-text-capitalize">{item.title}</a>
                                </li>
                            )}
                {/* <li>
                <a href="#getstarted" data-uk-scroll='offset:80' className="uk-text-capitalize">Getting Started</a>
              </li>
              <li>
               
                <a href="#blogs" data-uk-scroll='offset:80' className="uk-text-capitalize">Blogs</a>
              </li> */}
                        </ul>
                    </div>}
                </div>
            </nav>
        </div>
    </>
}
