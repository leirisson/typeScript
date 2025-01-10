import styles from './Avatar.module.css'


// eslint-disable-next-line react/prop-types
export function Avatar({src, hasBorder = true}){
    return(
        <>
        <img
         src={src}
         className={hasBorder ? styles.avatarwithBorder : styles.avatar} />
        </>
    )
}