import styles from './Avatar.module.css'


// eslint-disable-next-line react/prop-types
export function Avatar({src}){
    return(
        <>
        <img src={src} className={styles.avatar} />
        </>
    )
}