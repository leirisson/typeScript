import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

import {format, formatDistanceToNow} from 'date-fns';
import ptBr from  'date-fns/locale/pt-BR';


// eslint-disable-next-line react/prop-types
export function Post({author, content, publisheAt}) {
  
  const publisheAtFormat = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'",{
    locale: ptBr,
  })

  const publisheDateRelativeNow = formatDistanceToNow(publisheAt, {
    locale: ptBr,
    addSuffix: true

  })



  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar  className={styles.avatar} src={author.avatarUrl} />
            <div className={styles.authorinfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          {/* eslint-disable-next-line react/prop-types*/}
          <time title={publisheAtFormat} dateTime={publisheAt.toISOString()} >{ publisheDateRelativeNow }</time>
        </header>

        <div className={styles.content}>
          {content.map(line => {
            if(line.type === "paragraph"){
              return <p>{line.content}</p>
            } else if(line.type === 'link'){
              return <p><a href='#'>{line.content}</a> </p>
            }
          })}
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