import c from './AllPosts.module.css';
import Post from './post/Post';
import React from 'react';
import { useSelector } from 'react-redux';
import { allPostsDataSelector } from '../../../redux/selectors/GeneralSelectors';

type PropsType = {
    
}
const AllPosts: React.FC<PropsType> = (props) => {

    const allPostsData = useSelector(allPostsDataSelector);

    let allPostsElements = allPostsData.map(
        ap => <Post username={ap.username} title={ap.title} text={ap.text} likes={ap.likes} dislikes={ap.dislikes} />
    );

    return (
        <div className={c.AllPosts}>
            {allPostsElements}
        </div>
    );
}

export default AllPosts;