import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";

type MapStatePropsType = {
    postAdded: boolean,
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postAdded: state.addPostState.allPostsPage.postAdded,
    }
}

export const withProfileRedirect = (Component: React.ComponentType<MapStatePropsType>) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render () {
        if (this.props.postAdded) return <Redirect to='/profile' />
        return <Component {...this.props}/>
        }
    }
    const ConnectProfileRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectProfileRedirectComponent;
}