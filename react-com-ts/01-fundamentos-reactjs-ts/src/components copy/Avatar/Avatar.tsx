import styles from './Avatar.module.css'

interface Avatar {
    src:string;
    hasBorder: boolean
}


export function Avatar({src, hasBorder = true} : Avatar){
    return(
        <>
        <img
         src={src}
         className={hasBorder ? styles.avatarwithBorder : styles.avatar} />
        </>
    )
}