import styles from '../../styles/Home.module.css'
import { organizationName } from '../../maplelabs.config'
export default function Footer(){
    return (
        <>
        <div className={styles.footer}>
        <div className='uk-text-small'>Copyright © {new Date().getFullYear()} {organizationName}. All rights reserved.</div>
        </div>
        </>
    )
}