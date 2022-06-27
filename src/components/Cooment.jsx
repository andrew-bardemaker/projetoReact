import { Trash } from 'phosphor-react';
import { ThumbsUp } from 'phosphor-react';
import { Avatar } from './Avatar';
import style from './Comment.module.css';

export function Comment() {
    return (
        <div className={style.comment}>
            <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

            <div className={style.commentBox}>
                <div className={style.commentContent}>
                    <header>
                        <div className={style.authorAndTime}>
                            <strong>Andrew Bardemaker</strong>
                            <time title='11 de maio as 8:13' dateTime="2022-05-11 08:13:30"> Cerca de 1h atras</time>
                        </div>
                            <button title='Deletar Comentario'>
                                <Trash size={24} />
                            </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
                </div>

                <footer>
                    <button>
                  <ThumbsUp/>
                    Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    );
}