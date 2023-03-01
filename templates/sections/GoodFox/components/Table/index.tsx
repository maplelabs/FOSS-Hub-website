import Link from "next/link";
import BlockIcon from '../../../../../components/BlockIcon';

export default function Table({ columns, data }) {
  
    return (
      <div>
        <table className="uk-table uk-table-divider ">
          <thead>
            <tr>
              {columns.map((column, index) =>
                <th className={column.className} key={index}>{column.name}</th> 
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>
                 <Link target="_blank" rel="noopener noreferrer" href={row.link} className="hover">
                  <div className=" uk-flex uk-flex-row">
                    <div className=" uk-margin-small-right">
                      <BlockIcon {...row.icon} scale={'0.7'} ></BlockIcon>
                    </div>
                    <div>
                      <h3 className="uk-h4 uk-text-bolder uk-margin-small-bottom">
                        {row.title}
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
                    {row.languages.map((lan) => (
                      <span key={lan}
                      className="mpl-badge uk-light uk-margin-small-bottom uk-margin-small-right"
                      >
                        {lan}
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
                  {row.tags.map((topic) => (
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
                    {row.contributors.map((avatar) => (
                        <img
                          key={avatar.link}
                          className="uk-comment-avatar contributors uk-border-circle"
                          uk-tooltip={`title: ${avatar.name}; pos: bottom`}
                          src={avatar.src}
                          width="25"
                          height="25"
                          alt=""
                          onClick={() => window.open(avatar.link, '_blank', 'noreferrer')}
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