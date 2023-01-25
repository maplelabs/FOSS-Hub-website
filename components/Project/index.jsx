import Link from 'next/link'
export default function ProjectCard({ data }) {
  return (
    <Link target="_blank" rel="noopener noreferrer" href={data.html_url} className="hover">
      <div className="uk-card uk-card-default uk-card-body uk-card-hover">
        <div className="uk-margin-small-bottom uk-border-circle">
          <img className="uk-border-circle" src={data.icon_url} width="80" height={80} alt=""></img>
        </div>

        <div>
          <h3 className="uk-h3 uk-text-bolder">{data.name}</h3>
        </div>
        <div>
          <p>{data.description}</p>
        </div>
        <div>
          {data.languages.map((lang) => (
            <span
              className="mpl-badge uk-light  uk-padding-small uk-margin-small-bottom uk-margin-small-right"
              style={{ color: "black !important" }}
              key={lang}
            >
              {lang}
            </span>
          ))}
        </div>

        <div className="uk-width-expand uk-padding-small uk-padding-remove-horizontal">
          <div className="uk-flex uk-flex-nowrap uk-margin-remove-bottom">
            {data.top_contributors.map((user) => (
              <img
                className="uk-comment-avatar uk-margin-right uk-border-circle	uk-box-shadow-medium grayscale"
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
    </Link>
  );
}
