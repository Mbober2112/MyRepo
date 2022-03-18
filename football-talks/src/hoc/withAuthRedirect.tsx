import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { AppStateType } from "../redux/reduxStore";

type MapStatePropsType = {
    token: string,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        token: state.auth.token,
    }
}

export const withAuthRedirect = (Component: React.ComponentType<MapStatePropsType>) => {
    class RedirectComponent extends React.Component<MapStatePropsType> {
        render () {
        if (!this.props.token) return <Redirect to='/auth' />
        return <Component {...this.props}/>
        }
    }
    const ConnectAuthRedirectComponent = connect (mapStateToProps) (RedirectComponent);
    return ConnectAuthRedirectComponent;
}