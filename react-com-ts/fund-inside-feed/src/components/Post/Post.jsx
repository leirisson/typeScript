/* eslint-disable react/prop-types */
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';



export function Post({ author, content, publisheAt }) {

  // estados 
  const [comments, setComments] = useState(['post muito bacana'])
  const [newCommentText, setNewCommentText] = useState('')


  // funções de formatação
  const publisheAtFormat = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  })

  const publisheDateRelativeNow = formatDistanceToNow(publisheAt, {
    locale: ptBr,
    addSuffix: true

  })

  function handleNewCommentChang(e) {
    const newComment = e.target.value
    e.target.setCustomValidity('');
    setNewCommentText(newComment)
  }

  function handleComment(e) {
    e.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }
  /*
  essa função deleta um comentario
  */
  function deletarComment(comment) {
    const listaDeComentariosFiltrada = comments.filter(commentFilter => commentFilter !== comment)
    setComments(listaDeComentariosFiltrada)
  }

  // validando o formulario de comentario
  function handleNewCommentInvalid(){
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  // verifica quando o novo comentario esta vazio
  const isNewComment = newCommentText.length === 0
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar className={styles.avatar} src={author.avatarUrl} />
            <div className={styles.authorinfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>

          <time title={publisheAtFormat} dateTime={publisheAt.toISOString()} >{publisheDateRelativeNow}</time>
        </header>

        <div className={styles.content}>
          {
            content.map(line => {
              if (line.type === "paragraph") {
                return <p key={line.content} >{line.content}</p>
              } else if (line.type === 'link') {
                return <p key={line.content} ><a href='#'>{line.content}</a> </p>
              }
            })
          }
        </div>

        <form onSubmit={(e) => handleComment(e)} className={styles.commentForm}>
          <strong>Deixe seu feedback</strong>
          <textarea
            required
            onChange={handleNewCommentChang}
            value={newCommentText}
            onInvalid={handleNewCommentInvalid}
            placeholder='Deixe seu comentário aqui!'
          />
          <footer>
            <button type='submit' disabled={isNewComment} >Publicar</button>
          </footer>
        </form>

        <div className={styles.commentList}>
          {comments.map(comment => {
            return (
              <Comment
                key={comment}
                contenComment={comment}
                srcAvatar={author.avatarUrl}
                onDeleteComment={deletarComment}
              />
            )
          })}

        </div>
      </article>
    </>
  )
}