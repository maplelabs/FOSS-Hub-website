import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import { organizationName, footerInstagramUrl, footerLinkedinUrl, officeAddress1, 
    officeAddress2, services, privacyPolicy, termsofUse, cookiePolicy, productsURL, whatwedoURL, careersURL, contactusURL } from '../../maplelabs.config'
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
                        <div className=''>
                            <div>
                           <p className="uk-text-small uk-text-bold">
                                    INDIA OFFICE
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
                        {/* <div>
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
                        </div> */}
                        <div>
                            <p className="uk-text-small uk-text-bold">
                                SERVICES
                            </p>
                            <ul className='uk-list uk-text-meta'>
                               {services.map((service)=> <li key={service}>
                                <Link href={service.url} target="_blank" rel="noreferrer noopener">{service.name}</Link></li>)}
                            </ul>
                        </div>
                        <div>
                            <p className="uk-text-small uk-text-bold">
                                COMPANY
                            </p>
                            <ul className='uk-list uk-text-meta'>
                                {/* <li>
                                    <Link href={}>About</Link>
                                </li> */}
                                <li>
                                    <Link href={productsURL} target="_blank" rel="noreferrer noopener">Our Products</Link>
                                </li>
                                <li>
                                    <Link href={whatwedoURL} target="_blank" rel="noreferrer noopener">What we do?</Link>
                                </li>
                                <li>
                                    <Link href={careersURL} target="_blank" rel="noreferrer noopener">Careers</Link>
                                </li>
                                <li>
                                    <Link href={contactusURL} target="_blank" rel="noreferrer noopener">Contact Us</Link>
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
                            <a href={privacyPolicy}>Privacy Policy</a>
                            <a href={termsofUse}>Terms of Use</a>
                            <a href={cookiePolicy}>Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}