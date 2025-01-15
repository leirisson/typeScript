
import styles from './Post.module.css'
import { Comment } from '../Comment/Comment'
import { Avatar } from '../Avatar/Avatar'

import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale/pt-BR';
import { useState, type ChangeEvent, type FormEvent, type InvalidEvent } from 'react';


interface Author {
  name: string;
  role: string;
  avatarUrl: string
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostsProps {
  author: Author;
  publisheAt: Date;
  content: Content[];
}

export function Post({ author, content, publisheAt }: PostsProps) {

  // estados 
  const [comments, setComments] = useState(['post muito bacana'])
  const [newCommentText, setNewCommentText] = useState('')


  // funções de formatação
  const publisheAtFormat = format(publisheAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const publisheDateRelativeNow = formatDistanceToNow(publisheAt, {
    locale: ptBR,
    addSuffix: true

  })

  function handleComment(event: FormEvent) {
    event.preventDefault()

    setComments([...comments, newCommentText])
    setNewCommentText('')

  }

  function handleNewCommentChang(event: ChangeEvent<HTMLTextAreaElement>) {
    const newComment = event.target.value
    event.target.setCustomValidity('');
    setNewCommentText(newComment)
  }

  // validando o formulario de comentario
  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  /*
essa função deleta um comentario
*/
  function deletarComment(comment: string) {
    const listaDeComentariosFiltrada = comments.filter(commentFilter => commentFilter !== comment)
    setComments(listaDeComentariosFiltrada)
  }


  // verifica quando o novo comentario esta vazio
  const isNewComment = newCommentText.length === 0
  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar  hasBorder src={author.avatarUrl} alt='' />
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