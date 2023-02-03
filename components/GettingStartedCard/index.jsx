import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
import {discordLink} from '../../maplelabs.config'
export default function GettingStartedCard() {
    return (
        <div id='getstarted' className='uk-width-1-1'>
            <div className={"uk-section uk-background-cover uk-height-1-1 uk-padding-remove-horizontal " + styles['get-started-section']}>
                <div className=' uk-container' style={{position:'relative'}}>
                <div className={"uk-card uk-card-default uk-card-body uk-width-1-1 uk-child-width-1-2@m uk-child-width-1-1@s "+ styles['get-started-section-card']}>
                    <div style={{position:'relative',zIndex:10}} >
                        <div className="uk-h1 uk-text-bolder color-midnight-blue">Getting Started</div>
                        <p className='color-nickel'>You can get started by choosing a <a href="#" className='uk-link'>project</a> you want to use/contribute-to and go to the respective github link.</p>
                        <hr className='uk-margin-remove-bottom'/>
                        <h3 className="uk-card-title uk-text-bold">It is easy to get started if you join our open source discord community</h3>
                        <button onClick={() => window.open(discordLink, '_blank')} className="uk-button uk-button-primary  uk-text-bold" style={{backgroundColor:'#0362A7',fontSize:'16px'}}>Click to join</button>
                    </div>
                    <div className='uk-position-bottom-right height-350 uk-visible@m'>
                        <Image src="/images/questions.svg" fill={true}></Image>
                    </div>
                    <div className='height-350 uk-hidden@m'></div>
                    <div className="uk-position-bottom height-350 uk-hidden@m" >
                        <Image src="/images/questions.svg" fill={true}></Image>    
                    </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}