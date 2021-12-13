import { connect } from "react-redux";
import Saved from "./Saved";

const mapStateToProps = (state) => {
    return {
        allPostsData: state.addPostState.allPostsPage.allPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const SavedContainer = connect(mapStateToProps, mapDispatchToProps) (Saved);

export default SavedContainer;
