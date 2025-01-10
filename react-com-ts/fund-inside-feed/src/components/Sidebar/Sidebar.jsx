import styles from './Sidebar.module.css'
import { PencilLine } from 'phosphor-react'
import { Avatar } from '../Avatar/Avatar'

export function Sidebar(){
  return(
    <>
    <aside className={styles.sidebar}>
    <img
      className={styles.cover}
      src="https://media.istockphoto.com/id/2012746941/pt/foto/cyber-security-black-man-and-code-reflection-in-eyewear-hacking-and-software-update-in-office.jpg?s=1024x1024&w=is&k=20&c=aqEL4981CmDpfPR6lSFRhZ0cDlcGFpge7ampEsWOQHU=" 
      alt="img"  
    />

    <div className={styles.profile}>
      <Avatar  className={styles.avatar} src="https://github.com/leirisson.png"/>
      <strong>Leirisson Souza</strong>
      <span> Web Developer</span>
    </div>

    <footer>
      <a href="#">
        <PencilLine size={20}/>
        Editar seu perfil
      </a>
    </footer>
    </aside>
    </>
  )
}