import c from './MyPosts.module.css';

const MyPosts = (props) => {
    return (
        <div className={c.MyPosts}>
            <h3>{props.title}</h3>
            <pre>{props.text}</pre>
            <img src="https://clipart-best.com/img/like/like-clip-art-17.png" className={c.Like} />
            <span>{props.likes}</span>
            <img src="https://clipart-best.com/img/dislike/dislike-clip-art-22.png" className={c.Like} />
            <span>{props.dislikes}</span>
        </div>
    )
}

export default MyPosts;