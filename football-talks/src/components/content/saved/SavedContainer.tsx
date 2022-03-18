import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { AllPostType } from "../../../redux/addPostReducer";
import { AppStateType } from "../../../redux/reduxStore";
import Saved from "./Saved";

type MapStatePropsType = {
    allPostsData: Array<AllPostType>
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        allPostsData: state.addPostState.allPostsPage.allPostsData,
    }
}

export default compose<React.ComponentType> (
    connect(mapStateToProps, {}),
    withAuthRedirect,) (Saved);

