import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";

type MapStatePropsType = {
    login: string,
}
const mapStateToProps = (state: AppStateType) => {
    return {
        login: state.auth.login,
    }
}

export const withEnterRedirect = (Component: React.ComponentType<MapStatePropsType>) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render () {
        if (this.props.login != '') return <Redirect to='/enter' />
        return <Component {...this.props}/>
        }
    }
    const ConnectEnterRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectEnterRedirectComponent;
}