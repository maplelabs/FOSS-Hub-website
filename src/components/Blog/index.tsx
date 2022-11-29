
import React from 'react';


export default function Blog(): JSX.Element {
    return (<>
        <section className="uk-section uk-section-muted">
            <div className="uk-container">
                <h1 className="uk-text-bolder uk-text-center uk-margin-large-bottom">
                    Latest Blogs
                </h1>
                <div className="uk-slider-container-offset" uk-slider="center: false">

                    <div className="uk-position-relative " tabIndex={-1}>

                        <ul className="uk-slider-items uk-child-width-1 uk-child-width-1-3@m   uk-grid">
                            <li>
                                <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle" target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.snappyflow.io/blog/improve-triaging">
                                    <div className="uk-card-media-top">
                                        <img src="https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62ecf98f10b3857a4968c8e6_Improve-Triaging.svg" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title uk-link-heading">Improve Triaging And Reduce Log Management Spends</h3>
                                        <p>Automation of business process has radically changed</p>
                                    </div>
                                    <div className="uk-position-bottom-left  uk-card-body">
                                        <div className="uk-width-expand uk-padding-remove-horizontal">
                                            <img
                                                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                                                uk-tooltip={`title: Pramod Murthy; pos: bottom`}
                                                src='https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62e2983aae13486acf2e8c7f_MicrosoftTeams-image%20(6).png'
                                                width="40"
                                                height="40"
                                                alt=""
                                            />
                                            <span>Pramod Murthy</span>
                                        </div>
                                    </div>
                                    <div className="uk-position-bottom-right uk-overlay uk-overlay-default uk-padding-small">
                                        <span
                                            className="uk-link-heading"
                                            uk-icon="icon:sign-out; ratio:1.2"
                                        ></span>
                                    </div>
                                </a>

                            </li>
                            <li>
                                <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle" target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.snappyflow.io/blog/unleaspoweroftracing">
                                    <div className="uk-card-media-top">
                                        <img src="https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62ecf6471cef282deb07214b_UnleasPoweroftracing.svg" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title uk-link-heading">Tracing And Performance Analysis With SnappyFlow</h3>
                                        <p>This blog illustrates how to use SnappyFlow to analyze</p>
                                    </div>
                                    <div className="uk-position-bottom-left  uk-card-body">
                                        <div className="uk-width-expand uk-padding-remove-horizontal">


                                            <img
                                                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                                                uk-tooltip={`title: Pramod Murthy; pos: bottom`}
                                                src='https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62e2983aae13486acf2e8c7f_MicrosoftTeams-image%20(6).png'
                                                width="40"
                                                height="40"
                                                alt=""
                                            />
                                            <span>Pramod Murthy</span>
                                        </div>
                                    </div>
                                    <div className="uk-position-bottom-right uk-overlay uk-overlay-default uk-padding-small">
                                        <span
                                            className="uk-link-heading"
                                            uk-icon="icon:sign-out; ratio:1.2"

                                        ></span>
                                    </div>
                                </a>

                            </li>
                            <li>
                                <a className="uk-card uk-card-default uk-card-hover uk-card-body uk-link-toggle" target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://www.snappyflow.io/blog/troubleshootingjavaapplications">
                                    <div className="uk-card-media-top">
                                        <img src="https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62ecef1cc8eb8347eb911176_JAVA-Performance-Troubleshooting-CPU-and-Memory-Profiling.svg" alt="" />
                                    </div>
                                    <div className="uk-card-body">
                                        <h3 className="uk-card-title uk-link-heading">JAVA Performance Troubleshooting - CPU And Memory Profiling</h3>
                                        <p>This blog explains CPU and Memory Profiling concepts </p>
                                    </div>
                                    <div className="uk-position-bottom-left  uk-card-body ">
                                        <div className="uk-width-expand uk-padding-remove-horizontal">


                                            <img
                                                className="uk-comment-avatar uk-margin-right uk-border-cicle uk-box-shadow-medium"
                                                uk-tooltip={`title: Pramod Murthy; pos: bottom`}
                                                src='https://uploads-ssl.webflow.com/62bd9427ec73a11840fe243a/62e2983aae13486acf2e8c7f_MicrosoftTeams-image%20(6).png'
                                                width="40"
                                                height="40"
                                                alt=""
                                            />
                                            <span>Pramod Murthy</span>
                                        </div>
                                    </div>
                                    <div className="uk-position-bottom-right uk-overlay uk-overlay-default uk-padding-small">
                                        <span
                                            className="uk-link-heading"
                                            uk-icon="icon:sign-out; ratio:1.2"

                                        ></span>
                                    </div>
                                </a>

                            </li>
                        </ul>

                    </div>

                    <ul className="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>

                </div>
            </div>

            <div className='uk-align-right '>
                <a className="uk-button uk-button-text uk-link-toggle" target="_blank" href="https://maplelabsblr.sharepoint.com/"><span className='uk-link-heading'>View All Blogs <span uk-icon="arrow-right"></span></span></a>
            </div>
        </section>
    </>)
}
