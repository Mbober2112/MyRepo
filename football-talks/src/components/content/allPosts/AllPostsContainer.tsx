import { connect } from "react-redux";
import { AllPostType } from "../../../redux/addPostReducer";
import { AppStateType } from "../../../redux/reduxStore";
import AllPosts from "./AllPosts";

type MapStatePropsType = {
    allPostsData: Array<AllPostType>
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        allPostsData: state.addPostState.allPostsPage.allPostsData,
    }
}

const AllPostsContainer = connect(mapStateToProps, {}) (AllPosts);

export default AllPostsContainer;
