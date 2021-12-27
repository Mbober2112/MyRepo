import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        postAdded: state.addPostState.allPostsPage.postAdded,
    }
}

export const withProfileRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
        if (this.props.postAdded) return <Redirect to='/profile' />
        return <Component {...this.props}/>
        }
    }
    const ConnectProfileRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectProfileRedirectComponent;
}