import Link from 'next/link';

import BlockIcon from '../../../../../components/BlockIcon';
import { TableProps } from '../../config';
import styles from '../../styles.module.css';

export default function Table({ columns, data }: TableProps) {
  data.map((row) => {
    row.tags = row.tags?.map((tag) => {
      if (tag !== 'featured' && tag !== 'contributions-welcome') {
        if (tag?.includes('category')) {
          const category = tag.split('-');
          category.splice(0, 1);
          row.categories.push(category.join('-'));
          return;
        }
        return tag;
      }
    });
  });
  return (
    <div>
      <table className='uk-table uk-table-divider '>
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th className={column.className} key={index}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>
                <Link
                  target='_blank'
                  rel='noopener noreferrer'
                  href={row.link}
                  className={styles['hover']}
                >
                  <div className=' uk-flex uk-flex-row'>
                    <div className=' uk-margin-small-right'>
                      <BlockIcon {...row.icon} scale={0.7}></BlockIcon>
                    </div>
                    <div>
                      <h3 className='uk-h4 uk-text-bolder uk-margin-small-bottom'>
                        {row.title}
                      </h3>
                      <div
                        className={`uk-text-small uk-width-large ${styles['color_dark-cyan-blue']}`}
                      >
                        {row.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </td>
              <td>
                <div className=' uk-flex uk-flex-wrap '>
                  {row.languages?.map((lan) => (
                    <span
                      key={lan}
                      className={`uk-light uk-margin-small-bottom uk-margin-small-right ${styles['mpl-badge']}`}
                    >
                      {lan}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <div className=' uk-flex uk-flex-wrap '>
                  {row.categories?.map((category) => (
                    <span
                      key={category}
                      className={`uk-light uk-margin-small-bottom uk-margin-small-right ${styles['mpl-badge']}`}
                    >
                      {category ? category : 'utilities'}
                    </span>
                  ))}
                </div>
              </td>
              <td>
                <div className=' uk-flex uk-flex-wrap '>
                  {row.tags?.map(
                    (topic) =>
                      topic && (
                        <span
                          key={topic}
                          className={`uk-light uk-margin-small-bottom uk-margin-small-right ${styles['mpl-badge']}`}
                        >
                          {topic}
                        </span>
                      )
                  )}
                </div>
              </td>
              <td>
                <div className='uk-flex '>
                  {row.contributors?.map((avatar) => (
                    <img
                      key={avatar.link}
                      className={`uk-comment-avatar uk-border-circle ${styles['contributors']}`}
                      uk-tooltip={`title: ${avatar.name}; pos: bottom`}
                      src={avatar.src}
                      width='25'
                      height='25'
                      alt=''
                      onClick={() =>
                        window.open(avatar.link, '_blank', 'noreferrer')
                      }
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
