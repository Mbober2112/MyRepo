import c from './Post.module.css';

type PropsType = {
    username: string,
    title: string,
    text: string,
    likes: number,
    dislikes: number,
}
const Post = (props: PropsType) => {
    return (
        <div className={c.Post}>
            <img src="https://image.flaticon.com/icons/png/512/108/108186.png" className={c.Avatar}/>
            <span className={c.Username}>{props.username}</span>
            <h3>{props.title}</h3>
            <p>{props.text}</p><hr />
            <img src="https://clipart-best.com/img/like/like-clip-art-17.png" className={c.Like} />
            <span className={c.Counter}>{props.likes}</span>
            <img src="https://clipart-best.com/img/dislike/dislike-clip-art-22.png" className={c.Like} />
            <span className={c.Counter}>{props.dislikes}</span>
        </div>
    );
}

export default Post;