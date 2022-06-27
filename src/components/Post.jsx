import { Avatar } from './Avatar';
import { Comment } from './Cooment';
import style from './Post.module.css';

export function Post() {
    return (
        <article className={style.post}>
            <header>
                <div className={style.author}>
                    <Avatar src="https://avatars.githubusercontent.com/u/66971478?v=4"/>

                    <div className={style.authorInfo}>
                        <strong>Andrew Bardemaker</strong>
                        <span>Web Developer</span>
                    </div>

                </div>
                <time title='11 de maio as 8:13' dateTime="2022-05-11 08:13:30"> publicado há 1h</time>
            </header>

            <div className={style.content}>

                <p>Fala galeraa {' '}👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p><a href="">👉{' '} jane.design/doctorcare</a></p>
                <p>
                    <a href="">#novoprojeto </a>{' '}
                    <a href="">#nlw </a>{' '}
                    <a href="">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={style.commentForm}>
                <strong>Deixe seu feadback</strong>
                <textarea
                    placeholder='deixe um comentario'

                />
                <footer>
                    <button type='submit'>publicar</button>
                </footer>
            </form>

            <div className={style.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>
            </div>
        </article>
    );
}