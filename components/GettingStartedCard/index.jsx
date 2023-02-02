import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {discordLink} from '../../maplelabs.config'
export default function GettingStartedCard() {
    return (
        <div id='getstarted' className='uk-width-1-1'>
            <div className={"uk-section uk-background-cover uk-height-1-1 uk-padding-remove-horizontal " + styles['get-started-section']}>
            <div className=' uk-container' style={{position:'relative'}}>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1 gs-bg">
                    <Image src="/images/gettingstarted.png" fill={true}></Image>
                    <div style={{position:'relative',zIndex:10}} className='uk-width-1-2'>
                        <div className="uk-h1 uk-text-bolder color-midnight-blue">Getting Started</div>
                        <p>You can get started by choosing a <a href="#">project</a> you want to use/contribute-to and go to the respective github link.</p>
                        <hr className='uk-margin-remove-bottom'/>
                        <h3 className="uk-card-title uk-text-bold">It is easy to get started if you join our open source discord community</h3>
                        <button onClick={() => window.open(discordLink, '_blank')} className="uk-button uk-button-primary  uk-text-bold" style={{backgroundColor:'#0362A7',fontSize:'16px'}}>Click to join</button>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}