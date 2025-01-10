import { Avatar } from '../Avatar/Avatar'
import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

// eslint-disable-next-line react/prop-types
export function Comment({srcAvatar}) {
    return (
        <>
            <div className={styles.comment}>
                <Avatar hasBorder={false} src={srcAvatar} alt="avatar perfil" />
                <div className={styles.commentBox}>
                    <div className={styles.commentContent}>
                        <header>
                            <div className={styles.authorAndTime}>
                                <strong>Leirisson souza</strong>
                                <time title="12 de dezembro às 8:15" dateTime="2024-12-12 08:15:06" >Cerca de há 1h atrás</time>
                            </div>

                            <button title='Deletar coméntario'>
                                <Trash size={24} />
                            </button>

                        </header>
                        <p>
                            muitobom deve parabéns
                        </p>
                    </div>
                    <footer>
                        <button>
                            <ThumbsUp />
                            Aplaudir <span>20</span>
                        </button>
                    </footer>
                </div>
            </div>
        </>
    )
}
