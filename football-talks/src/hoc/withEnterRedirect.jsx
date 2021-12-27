import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
    }
}

export const withEnterRedirect = (Component) => {
    class RedirectComponent extends React.Component {
        render () {
        if (this.props.login != '') return <Redirect to='/enter' />
        return <Component {...this.props}/>
        }
    }
    const ConnectEnterRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectEnterRedirectComponent;
}