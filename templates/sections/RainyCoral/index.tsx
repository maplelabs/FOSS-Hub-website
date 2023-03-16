import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { RainyCoralProps } from './config';
import styles from './styles.module.css';

export default function RainyCoral({
  id,
  title,
  description,
  tiles,
}: RainyCoralProps) {
  return (
    <div id={id} className={`uk-width-1-1 ${styles.background}`}>
      <div className='uk-section '>
        <div className='uk-container'>
          <div className='uk-flex uk-flex-left uk-margin-large-bottom uk-light'>
            <div>
              <div className='uk-h1 uk-text-bolder'>{title}</div>
              <div className='uk-width-2-3 uk-text-primary'>{description}</div>
            </div>
          </div>

          <div
            className='uk-grid-column-small uk-grid-row-medium uk-grid-match uk-child-width-1-3@m uk-child-width-1-2@s uk-text-left'
            data-uk-grid
          >
            {tiles?.map((tile) => (
              <div key={tile.id}>
                <div className='uk-card uk-card-small uk-card-default uk-card-body uk-dark  uk-margin-small-right'>
                  <Image
                    className='uk-border-circle'
                    width='128'
                    height='128'
                    src={tile.avatar}
                    alt={`${tile.id}`}
                    style={{ border: '1px solid #D9D9D9', width: '40px' }}
                  />
                  <h3 className='uk-card-title uk-text-bolder uk-margin-small-top uk-margin-small-bottom'>
                    {tile.title}
                  </h3>
                  <p className=' uk-margin-remove-top'>{tile.subtitle}</p>
                  <Link href={tile.link.url} target='_blank'>
                    <button className='uk-button uk-button-link uk-button uk-link uk-flex'>
                      <>
                        <span
                          uk-icon={tile.link.icon}
                          className='uk-margin-small-right'
                        ></span>
                        {tile.link.text}
                      </>
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
