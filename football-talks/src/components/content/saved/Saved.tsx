import { useSelector } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../../hoc/withAuthRedirect';
import { AllPostType } from '../../../redux/addPostReducer';
import { allPostsDataSelector } from '../../../redux/selectors/GeneralSelectors';
import c from './Saved.module.css';
import SavedPost from './savedPost/SavedPost';

type PropsType = {
    // allPostsData: Array<AllPostType>
}
const Saved: React.FC<PropsType> = (props) => {

    const allPostsData = useSelector(allPostsDataSelector)

    let savedPostsElements = allPostsData.map(
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

export default compose(withAuthRedirect)(Saved);