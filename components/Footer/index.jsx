import styles from '../../styles/Home.module.css'
export default function Footer(){
    return (
        <>
        <div className={styles.footer}>
        <p className='uk-text-small'>Copyright © {new Date().getFullYear()} Maplelabs. All rights reserved.</p>
        </div>
        </>
    )
}