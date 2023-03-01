import Link from 'next/link'
import BlockIcon from '../../../../../components/BlockIcon';
export default function Card({ data }) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={data.link} className="hover">
      <div className="uk-card uk-card-small uk-card-default uk-card-body uk-card-hover">
        <div className='uk-margin-small-top uk-margin-small-left uk-margin-small-right uk-margin-small-bottom'>
        <div className="uk-margin-small-bottom uk-border-circle">
          <BlockIcon {...data.icon} ></BlockIcon>
        </div>

        <div>
          <h3 className="uk-h4 uk-text-bolder color-black uk-margin-small-bottom">{data.title}</h3>
        </div>
        <div>
          <p className='uk-text-small color-lead uk-text-secondary'>{data.description}</p>
        </div>
        <div>
          {data.languages?.map((lan) => (
            <span
              className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right"
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
                className="uk-comment-avatar contributors uk-border-circle"
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
