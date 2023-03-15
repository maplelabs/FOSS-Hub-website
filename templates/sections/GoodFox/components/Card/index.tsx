import Link from 'next/link';

import BlockIcon from '../../../../../components/BlockIcon';
import { CardProps } from '../../config';
import styles from '../../styles.module.css';

export default function Card({ data }:CardProps) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={data.link} className={styles["hover"]}>
      <div className="uk-card uk-card-small uk-card-default uk-card-body uk-card-hover">
        <div className='uk-margin-small-top uk-margin-small-left uk-margin-small-right uk-margin-small-bottom'>
        <div className="uk-margin-small-bottom uk-border-circle">
          <BlockIcon scale={1} {...data.icon} ></BlockIcon>
        </div>

        <div>
          <h3 className={`uk-h4 uk-text-bolder uk-margin-small-bottom ${styles['color_black']}`}>{data.title}</h3>
        </div>
        <div>
          <p className={`uk-text-small uk-text-secondary ${styles['color_lead']}`}>{data.description}</p>
        </div>
        <div>
          {data.languages?.map((lan) => (
            <span
              className={`uk-light uk-margin-small-bottom uk-margin-small-right ${styles['mpl-badge']}`}
              key={lan}
            >
              {lan}
            </span>
          ))}
        </div>

        <div className="uk-width-expand uk-padding-small uk-padding-remove-horizontal uk-padding-remove-bottom">
          <div className="uk-flex uk-flex-nowrap uk-margin-remove-bottom">
            {data.contributors?.map((avatar) => (
              <img
                className={`uk-comment-avatar uk-border-circle ${styles['contributors']}`}
                uk-tooltip={`title: ${avatar.name}; pos: bottom`}
                src={avatar.src}
                width="40"
                height="40"
                alt=""
                key={avatar.name}
                onClick={() => window.open(avatar.link, '_blank', 'noreferrer')}
              />
            ))}
          </div>
        </div>
        </div>
      </div>
    </Link>
  );
}
