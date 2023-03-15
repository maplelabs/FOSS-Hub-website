import Image from 'next/image';
/**
 * Files generated using template generator
 */
import Link from 'next/link';
import React from 'react';

import { MiniatureAardwolfProps } from './config';
import styles from './styles.module.css';

export default function MiniatureAardwolf({id,title, medias}:MiniatureAardwolfProps) {
    return <div id={id} className="uk-width-1-1">
    <div className="uk-section uk-dark">
      <div className="uk-container">
        <div className="uk-flex uk-flex-between uk-margin-medium-bottom">
        <div className={`uk-h1 uk-text-bolder uk-margin-small-bottom ${styles['color_midnight-blue']}`}>
            {title}
          </div>
          <div className={styles.view_all} hidden={true}>
            <Link className="uk-button uk-button-link uk-padding-small uk-margin-small-left uk-margin-small-right uk-text-bolder" href='projects'>
              VIEW ALL
            </Link>
          </div>
        </div>

        <div className="uk-child-width-1-2@m uk-text-left uk-grid uk-grid-small uk-grid-match" data-uk-grid>
          {medias.map((item, index) =>
            <div uk-lightbox="animation: scale;video-autoplay	:true" key={item.url} >
              <a className={`uk-h4 uk-text-bolder ${styles['color_midnight-blue']} `} href={item.url} style={{ textDecoration: 'none' }}>
                <Image src={item.thumbnail} className='uk-margin-small-bottom uk-width-1-1' width={450} height={250} alt={item.text} style={{ borderRadius: '12px' }}/>
                {item.text}
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
}
