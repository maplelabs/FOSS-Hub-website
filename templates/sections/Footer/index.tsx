/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React from 'react';

import { FooterProps } from './config';
import styles from './styles.module.css';

export default function Footer({ address, subSections, copyRight, terms, social }: FooterProps) {
    return <>
        <div className={"uk-section uk-padding-remove-bottom " + styles.footer}>
            <div className="uk-container  uk-margin-small-bottom" >
                <div className="uk-grid uk-child-width-expand@s" uk-grid='true'>
                    <span className="uk-width-auto uk-margin-small-right" uk-icon="location"></span>
                    <div className=''>
                        {address.map((add, index) =>
                            <div key={index}>
                                <p className="uk-text-small uk-text-bold">{add.name}</p>
                                {/* INDIA OFFICE */}
                                <p className='uk-text-meta'>{add.address}</p>
                            </div>
                        )}
                    </div> 
                    {subSections?.map((sub, index) =>
                        <div key={index}>
                            <p className="uk-text-small uk-text-bold"> {sub.title}
                            </p>
                            <ul className='uk-list uk-text-meta'>
                                {sub.list.map((item, index) => <li key={index}>
                                    <Link href={item.url} target="_blank" rel="noreferrer noopener">{item.text}</Link></li>)}
                            </ul>
                        </div>)}
                    <div>
                        <p className="uk-text-small uk-text-bold">{social.title}</p>
                        {social.list.map((item, index) =>
                            <a href={item.url} className="uk-icon-button  uk-margin-small-right" uk-icon={item.text} target="_blank" rel="noreferrer noopener"></a>
                        )}
                    </div>
                </div>
                <hr />
                <div className='uk-flex uk-flex-between'>
                    <div className='uk-text-meta'>{copyRight}</div>
                    <div className="uk-grid-divider  uk-text-meta" uk-grid="true">
                        {terms.map((item, index) =>
                            <a key={index} href={item.url}>{item.text}</a>)}
                    </div>
                </div>
            </div>
        </div>
    </>
}
