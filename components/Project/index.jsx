import Link from 'next/link'
export default function ProjectCard({ data }) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={data.html_url} className="hover">
      <div className="uk-card uk-card-small uk-card-default uk-card-body uk-card-hover">
        <div className='uk-margin-small-top uk-margin-small-left uk-margin-small-right uk-margin-small-bottom'>
        <div className="uk-margin-small-bottom uk-border-circle">
          <img className="uk-border-circle" src={data.icon_url} width="56" height={56} alt=""></img>
        </div>

        <div>
          <h3 className="uk-h4 uk-text-bolder color-black uk-margin-small-bottom">{data.name}</h3>
        </div>
        <div>
          <p className='uk-text-small color-lead uk-text-secondary'>{data.description}</p>
        </div>
        <div>
          {data.languages?.map((lang) => (
            <span
              className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right"
              key={lang}
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="uk-width-expand uk-padding-small uk-padding-remove-horizontal">
          <div className="uk-flex uk-flex-nowrap uk-margin-remove-bottom">
            {data.top_contributors?.map((user) => (
              <img
                className="uk-comment-avatar contributors uk-border-circle"
                uk-tooltip={`title: ${user.login}; pos: bottom`}
                src={user.avatar_url}
                width="40"
                height="40"
                alt=""
                key={user.login}
                onClick={() => window.open(user.html_url, '_blank', 'noreferrer')}
              />
            ))}
            {/*             
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                uk-tooltip={`title: ; pos: bottom`}
                src={"/favicon.ico"}
                width="40"
                height="40"
                alt=""
              />
            </a>
            <a target="_blank" rel="noopener noreferrer">
              <img
                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                uk-tooltip={`title: ; pos: bottom`}
                src={"/favicon.ico"}
                width="40"
                height="40"
                alt=""
              />
            </a> */}
          </div>
        </div>
        </div>
      </div>
    </Link>
  );
}
