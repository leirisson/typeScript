import { useState } from 'react'
import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

interface CommentProps {
    contenComment: string;
    onDeleteComment: (comment: string) => void;
    srcAvatar: string
}
export function Comment({ contenComment, srcAvatar, onDeleteComment }: CommentProps) {
    const [likeCount, setLikeCount]  = useState(0);

    function handleLikeComment(){
        setLikeCount((prevLike) => prevLike + 1)
        
    }

    // função para contabilizar os likes de um comentario
    function handleDeleteComment() {
        onDeleteComment(contenComment)
    }

    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src={srcAvatar} alt="" />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Leirisson souza</strong>
                                <time title="12 de dezembro às 8:15" dateTime="2024-12-12 08:15:06" >Cerca de há 1h atrás</time>
                            </div>

                            <button onClick={handleDeleteComment} title='Deletar coméntario'>
                                <Trash size={24} />
                            </button>
                        </header>
                        <p>
                            {contenComment}
                        </p>
                    </div>
                    <footer>
                        <button onClick={handleLikeComment}>
                            <ThumbsUp />
                            Aplaudir <span>{likeCount}</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}
