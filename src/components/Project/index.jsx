import React from "react";

export default function ProjectCard({ project }) {
  return (
    <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle uk-animation-slide-top-small uk-margin-bottom" target="_blank"
      rel="noopener noreferrer"
      href={project.html_url}>
      <h3 className="uk-card-title uk-link-heading">
        {project.name}
      </h3>
      <p className="uk-margin-remove-bottom">{project.description?.substring(0, 100)} {project.description?.length >= 100 && '...'}</p>
      {/* {project.topics.map((topic) => (
        <span className="uk-badge">{topic}</span>
      ))} */}
      <div className="uk-card-body uk-padding-remove-horizontal uk-padding-small">
      {project.languages.map((lang)=>( 
      // <div className="uk-card-badge uk-label">{lang}</div>
      <span className="uk-badge  uk-padding-small uk-margin-small-bottom" style={{marginRight:"5px"}} key={lang}>{lang}</span>
      ))
      }
      </div>
      <div className="uk-position-bottom-left  uk-card-body uk-padding-remove-vertical">
        <div className="uk-width-expand uk-padding-small uk-padding-remove-horizontal">
          <div className="uk-flex uk-flex-nowrap uk-margin-remove-bottom">
            {project.top_contributors.map((user) => (
              <a target="_blank" rel="noopener noreferrer" href={user.html_url} key={user.id}>
                <img
                  className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                  uk-tooltip={`title: ${user.login}; pos: bottom`}
                  src={user.avatar_url}
                  width="40"
                  height="40"
                  alt=""
                />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="uk-position-bottom-right uk-overlay uk-overlay-default uk-padding-small">
        <span
          className="uk-link-heading"
          uk-icon="icon:sign-out; ratio:1.2"

        ></span>
      </div>
    </a>
  );
}
