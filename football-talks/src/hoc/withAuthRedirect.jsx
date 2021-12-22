import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
    }
}

export const withAuthRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
        if (this.props.token === '') return <Redirect to='/auth' />
        return <Component {...this.props}/>
        }
    }
    const ConnectAuthRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectAuthRedirectComponent;
}