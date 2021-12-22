import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
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

export default compose (
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,) (Saved);

