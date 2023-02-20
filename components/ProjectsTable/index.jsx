import Link from "next/link";
import BlockIcon from "../BlockIcon";

export default function ProjectsTable({ data }) {
  
    return (
      <div>
        <table className="uk-table uk-table-divider ">
          <thead>
            <tr>
              <th className="uk-width-large">Project Name</th>
              <th className="uk-width-small">Tech Stack</th>
              <th className="uk-width-small">Category</th>
              <th className="uk-width-small">Tags</th>
              <th>Contributors</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.html_url}>
                <td>
                 <Link target="_blank" rel="noopener noreferrer" href={row.html_url} className="hover">
                  <div className=" uk-flex uk-flex-row">
                    <div className=" uk-margin-small-right">
                      <BlockIcon {...row.icon} scale={'0.7'} ></BlockIcon>
                    </div>
                    <div>
                      <h3 className="uk-h4 uk-text-bolder uk-margin-small-bottom">
                        {row.name}
                      </h3>
                      <div className='uk-text-small color-dark-cyan-blue uk-width-large'>
                        {row.description}
                      </div>
                    </div>
                  </div>
                  </Link>
                </td>
                <td>
                  <div className=" uk-flex uk-flex-row ">
                    {row.languages.map((lang) => (
                      <span key={lang}
                      className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right"
                      >
                        {lang}
                      </span>
                    ))}
                  </div>
                </td>
                <td>
                  <span className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right">
                    utilities
                  </span>
                </td>
                <td className="uk-flex uk-flex-row">
                  {row.topics.map((topic) => (
                    topic !== 'Featured' || topic !== 'Contributions-Welcome' &&
                    <span key={topic}
                    className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right"
                    >
                      {topic}
                    </span>
                  ))}
                </td>
                <td>
                  <div className="uk-flex ">
                    {row.top_contributors.map((user) => (
                        <img
                          key={user.html_url}
                          className="uk-comment-avatar contributors uk-border-circle"
                          uk-tooltip={`title: ${user.login}; pos: bottom`}
                          src={user.avatar_url}
                          width="25"
                          height="25"
                          alt=""
                          onClick={() => window.open(user.html_url, '_blank', 'noreferrer')}
                        />
                    ))}
                    {/* <div>
                      {row.contributors.length > 3 && (
                        <button className="contribButton">
                          {`+${row.contributors.length - 3}`}
                        </button>
                      )}
                      <div uk-dropdown="pos: bottom-left; mode: click;boundary: !.contribButton">
                        <ul className="uk-nav uk-dropdown-nav uk-text-bold">
                          {row.contributors.slice(3).map((contrib) => (
                            <li className="uk-margin-small-bottom">
                              <div className="uk-flex">
                              <img src={contrib.avatar_url} className="uk-margin-small-right additionalContributorsStyle"></img>
                              <span>{contrib.login}</span>
                              </div>
                            </li>
                            
                          ))}
                        </ul>
                      </div>
                    </div> */}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }