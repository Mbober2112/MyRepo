import { connect } from "react-redux";
import AllPosts from "./AllPosts";

const mapStateToProps = (state) => {
    return {
        allPostsData: state.addPostState.allPostsPage.allPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps) (AllPosts);

export default AllPostsContainer;
