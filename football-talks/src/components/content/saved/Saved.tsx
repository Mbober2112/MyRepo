import { AllPostType } from '../../../redux/addPostReducer';
import c from './Saved.module.css';
import SavedPost from './savedPost/SavedPost';

type PropsType = {
    allPostsData: Array<AllPostType>
}
const Saved = (props: PropsType) => {

    let savedPostsElements = props.allPostsData.map(
        (ap) => {
            if (ap.saved === true) {
                return(
                    <SavedPost username={ap.username} title={ap.title} text={ap.text} likes={ap.likes} dislikes={ap.dislikes} />
                )
            }
        }
    );

    return (
        <div className={c.Saved}>
            {savedPostsElements}
        </div>
    );
}

export default Saved;