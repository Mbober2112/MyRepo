import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { onLogin, changeAuthData, loginTC } from "../../../redux/authReducer";
import { compose } from "redux";
import { withEnterRedirect } from "../../../hoc/withEnterRedirect";
import { AppStateType } from "../../../redux/reduxStore";

type MapStatePropsType = {
    login: string,
    pass: string,
}

type MapDispatchPropsType = {
    changeAuthData: (login: string, pass: string) => void,
}
type PropsType = MapStatePropsType & MapDispatchPropsType;

class AuthContainer extends React.Component<PropsType> {

    render () {
        return(
            <Auth login={this.props.login}
                pass = {this.props.pass}
                changeAuthData = {this.props.changeAuthData}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType =>{
    return {
        login: state.auth.login,
        pass: state.auth.pass,
    }
}

export default compose (
    connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType>(mapStateToProps, {changeAuthData}),
    withEnterRedirect,) (AuthContainer);
    