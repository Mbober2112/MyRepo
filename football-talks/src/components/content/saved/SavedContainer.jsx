import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import Saved from "./Saved";

let authRedirectComponent = withAuthRedirect(Saved);

const mapStateToProps = (state) => {
    return {
        allPostsData: state.addPostState.allPostsPage.allPostsData,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        
    }
}

const SavedContainer = connect(mapStateToProps, mapDispatchToProps) (authRedirectComponent);

export default SavedContainer;
