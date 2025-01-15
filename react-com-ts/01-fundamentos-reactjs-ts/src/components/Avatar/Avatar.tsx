import styles from './Avatar.module.css'

interface Avatar {
    src:string;
    alt:string;
    hasBorder: boolean;
    className?:string;

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