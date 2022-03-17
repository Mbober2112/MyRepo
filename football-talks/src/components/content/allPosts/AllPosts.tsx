import c from './AllPosts.module.css';
import Post from './post/Post';
import React from 'react';
import { AllPostType } from '../../../redux/addPostReducer';

type PropsType = {
    allPostsData: Array<AllPostType>,
}
const AllPosts = (props: PropsType) => {

    let allPostsElements = props.allPostsData.map(
        ap => <Post username={ap.username} title={ap.title} text={ap.text} likes={ap.likes} dislikes={ap.dislikes} />
    );

    return (
        <div className={c.AllPosts}>
            {allPostsElements}
        </div>
    );
}

export default AllPosts;