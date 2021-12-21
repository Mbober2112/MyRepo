import { Redirect } from 'react-router-dom';
import c from './Saved.module.css';
import SavedPost from './savedPost/SavedPost';

const Saved = (props) => {

    let savedPostsElements = props.allPostsData.map(
        (ap) => {
            if (ap.saved === true) {
                return(
                    <SavedPost username={ap.username} title={ap.title} text={ap.text} likes={ap.likes} dislikes={ap.dislikes} />
                )
            }
        }
    );

    if(props.token === '') return <Redirect to='/auth' />

    return (
        <div className={c.Saved}>
            {savedPostsElements}
        </div>
    );
}

export default Saved;