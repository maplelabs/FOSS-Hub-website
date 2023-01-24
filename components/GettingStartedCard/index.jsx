import styles from '../../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function GettingStartedCard() {
    return (
        <div className='uk-width-1-1'>
            <div className={"uk-section uk-background-cover uk-height-1-1 uk-padding-small uk-padding-remove-horizontal get-started-section"}>
            <div className=' uk-container' style={{position:'relative'}}>
                <div className="uk-card uk-card-default uk-card-body uk-width-1-1 gs-bg">
                    <Image src="/images/gettingstarted.png" fill={true}></Image>
                    <div style={{position:'relative',zIndex:10}} className='uk-width-1-2'>
                        <div class="uk-h1 uk-text-bolder">Getting Started</div>
                        <p>You can get started by choosing a <a href="#">project</a> you want to use/contribute-to and go to the respective github link.</p>
                        <h3 class="uk-card-title">It is easy to get started if you join our open source discord community</h3>
                        <button class="uk-button uk-button-primary uk-text-bold" style={{backgroundColor:'#0362A7'}}>Click to join</button>
                </div>
                </div>
                </div>
            </div>
        </div>
        
    )
}