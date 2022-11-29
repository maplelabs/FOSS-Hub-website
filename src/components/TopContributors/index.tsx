import React, { useEffect, useState } from 'react';

function contributors(): JSX.Element {
  
  const [sorted, setSorted] = useState([])


  useEffect(()=>{
    setSorted(JSON.parse(localStorage.getItem("topFive")||''))
  },[])

  return (
    <>
    {/* <section className="uk-section  ">
        <div className="uk-container">
          <div className="uk-heading-small uk-text-bolder uk-text-center">
              <span uk-icon="star"></span> Top Contributers <span uk-icon="star"></span>
          </div>
          <div className="uk-grid-medium uk-child-width-1-5@s uk-flex-center uk-text-center uk-grid uk-grid-match uk-padding uk-padding-remove-horizontal" >
          {sorted.map((user: any) => (
            <div>
          <div className="uk-card uk-card-default">
            <div className="uk-card-media-top">
                <img src={user.avatar_url} alt=""/>
            </div>
            <div className="uk-card-footer">
                <h3 className="uk-card-title">{user.login}</h3>
                <p>{user.login}</p>
            </div>
          </div>
          </div>
          ))}
        </div>
        </div>
      </section> */}
      <section className="uk-section  uk-background-fixed uk-background-cover uk-background-center-center  bg1">
        <div className="uk-container uk-flex uk-flex-center uk-child-width-1-2@m uk-flex-wrap">
          <div className='uk-flex uk-flex-column uk-justify-center uk-flex-middle uk-flex-center'>
            <div className="uk-heading-small uk-text-bolder uk-text-center">
              <span uk-icon="star"></span> Top <span uk-icon="star"></span><div>Contributers</div>
            </div>
            <div className='uk-text-center uk-padding-remove-vertical uk-padding'>
            Meet our contributers who believe in the notion that open source brings the best out in people. Join us in building the future with open source.

            </div>
          </div>
          
          <div className="uk-grid-medium uk-child-width-1-1@s uk-flex-center uk-text-left uk-grid uk-grid-match uk-padding uk-padding-remove-horizontal" data-uk-scrollspy="cls: uk-animation-slide-right; target: .uk-comment; delay: 0; repeat: true"  >
          {sorted.map((user: any) => (
            <div key={user.id}>
              <article className="uk-comment " role="comment">
                <header className="uk-comment-header uk-card uk-card-default uk-link-toggle">
                    <div className=" uk-flex-middle " data-uk-grid>
                        <div className="uk-width-1-4">
                            <img className="uk-comment-avatar" src={user.avatar_url} width="120" height="120" alt=""/>
                        </div>
                        <div className="uk-width-expand" >
                            <h4 className="uk-comment-title uk-margin-remove"><span className="uk-link-reset">{user.name}</span></h4>
                            <ul className="uk-comment-meta uk-subnav uk-subnav-divider uk-margin-remove-top">
                                <a target="_blank" rel="noopener noreferrer" href={user.html_url} className="uk-link-heading">{user.login}</a>
                                <li>{user._repo[0]}</li>
                                {/* {user._repo.map((repo)=>(<li  className="uk-flex uk-flex-wrap">{repo}</li>))} */}
                            </ul>
                        </div>
                    </div>
                </header>
                
            </article>
            </div>
          ))}
        </div></div>
      </section>
    </>
  )
}

export default contributors