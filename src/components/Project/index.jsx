import React from "react";

export default function ProjectCard({ project }) {
  return (
    <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle uk-animation-slide-top-small uk-margin-bottom" target="_blank"
      rel="noopener noreferrer"
      href={project.html_url}>
      <h3 className="uk-card-title uk-link-heading uk-margin-top">
        {project.name}
      </h3>
      <p className="uk-margin-large-bottom">{project.description}</p>
      {project.topics.map((topic) => (
        <span className="uk-badge">{topic}</span>
      ))}
      {project.language && (
        <div className="uk-card-badge uk-label">{project.language}</div>
      )}
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
        {/* <a
          className="uk-margin-right"
          uk-icon="icon:expand;"
          target="_blank"
          rel="noopener noreferrer"
          data-uk-toggle="target: #modal-center"
        ></a> */}
        {" "}
        <span
          className="uk-link-heading"
          uk-icon="icon:sign-out; ratio:1.2"

        ></span>
      </div>

      {/* <div id="modal-center" class="uk-flex-top" data-uk-modal>
        <div class="uk-modal-dialog uk-modal-body uk-margin-auto-vertical">
          <button
            class="uk-modal-close-default"
            type="button"
            data-uk-close
          ></button>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div> */}
    </a>
  );
}
