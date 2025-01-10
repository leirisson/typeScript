import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

// eslint-disable-next-line react/prop-types
export function Post() {
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar className={styles.avatar} src="https://github.com/larisa.png" />
            <div className={styles.authorinfo}>
              <strong>Leirisson Souza</strong>
              <span> Web Developer</span>
            </div>
          </div>
          <time title="12 de dezembro às 8:15" dateTime="2024-12-12 08:15:06" >Publicado há 1h</time>
        </header>

        <div className={styles.content}>
          <p>Fala galeraa 👋 </p>
          <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
          <p><a href="#">👉 jane.design/doctorcare </a></p>
          <p>
            <a>#novoprojeto</a>
            <a> #rocketseat</a>
            <a> #nlw</a>
          </p>
        </div>

        <form className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            placeholder='Deixe seu comentário aqui!' />
          <footer>
            <button type='submit'>Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          <Comment srcAvatar="https://github.com/larisa.png"/>
          <Comment srcAvatar="https://github.com/marcos.png"/>
          <Comment srcAvatar="https://github.com/thiago.png"/>
        </div>
      </article>
    </>
  )
}