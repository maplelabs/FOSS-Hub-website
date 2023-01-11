import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { organizationName, footerInstagramUrl, footerLinkedinUrl, officeAddress1, officeAddress2, services } from '../../maplelabs.config'
export default function Footer() {
    return (
        <>
            <div className={"uk-section uk-padding-remove-bottom " + styles.footer}>
                <div className="uk-container  uk-margin-small-bottom" >
                    {/* <div className="uk-flex uk-flex-center uk-margin-medium-bottom">
                        <form>
                            <label className='uk-text-muted uk-text-default uk-padding-small'>Stay tuned to our latest newsletter</label>
                            <input className="uk-input uk-form-width-medium uk-margin-small-right" type="text" placeholder="Enter Email ID" />
                            <button className="uk-button uk-button-primary">SUBSCRIBE</button>
                        </form>
                    </div> */}
                    {/* <hr /> */}
                    <div className="uk-grid uk-child-width-expand@s" uk-grid='true'>
                    <span className="uk-width-auto uk-margin-small-right" uk-icon="location"></span>  
                        <div className='uk-padding-remove-left'>
                            <div>
                           <p className="uk-text-small uk-text-bold">
                                    INDIAN OFFICE
                                </p>
                                <p className='uk-text-meta'>{officeAddress1}</p>
                            </div>
                            <div>
                                <p className="uk-text-small uk-text-bold">
                                    USA OFFICE
                                </p>
                                <p className='uk-text-meta'>{officeAddress2}</p>
                            </div>
                        </div>
                        <div>
                            <p className="uk-text-small uk-text-bold">
                                QUICK CONNECT
                            </p>
                            <ul className='uk-list uk-text-meta'>
                                <li>
                                    <Link href='/projects'>Projects</Link>
                                </li>
                                <li>
                                    <Link href='/blogs'>Blogs</Link>
                                </li>
                                <li>
                                    <a href="#">Learn</a>
                                </li>
                                <li>
                                    <a href="#">Getting Started</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="uk-text-small uk-text-bold">
                                SERVICES
                            </p>
                            <ul className='uk-list uk-text-meta'>
                               {services.map((service)=> <li key={service}>{service}</li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="uk-text-small uk-text-bold">
                                COMPANY
                            </p>
                            <ul className='uk-list uk-text-meta'>
                                <li>
                                    Our Products
                                </li>
                                <li>
                                    Documentation
                                </li>
                                <li>
                                    Our Services
                                </li>
                                <li>
                                    Company
                                </li>
                                <li>
                                    What we do ?
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="uk-text-small uk-text-bold">CONNECT SOCIAL</p>
                            <a href={footerLinkedinUrl} className="uk-icon-button uk-margin-small-right" uk-icon="linkedin" target="_blank" rel="noreferrer noopener"></a>
                            <a href={footerInstagramUrl} className="uk-icon-button  uk-margin-small-right" uk-icon="instagram" target="_blank" rel="noreferrer noopener"></a>
                        </div>
                    </div>
                    <hr />
                    <div className='uk-flex uk-flex-between'>
                        <div className='uk-text-meta'>Copyright © {new Date().getFullYear()} {organizationName}. All rights reserved.</div>
                        <div className="uk-grid-divider  uk-text-meta" uk-grid="true">
                            <a href='#'>Privacy Policy</a>
                            <a href='#'>Terms of Use</a>
                            <a href='#'>Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}