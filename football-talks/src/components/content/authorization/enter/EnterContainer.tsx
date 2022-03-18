import React from "react";
import Enter from "./Enter";
import { loginTC } from "../../../../redux/authReducer";
import { connect } from 'react-redux';
import { AppStateType } from "../../../../redux/reduxStore";

type MapStatePropsType = {
    login: string,
    pass: string,
    token: string,
}

type MapDispatchPropsType = {
    loginTC: (login: string, pass: string) => void,
}

type PropsType = MapStatePropsType & MapDispatchPropsType;

class EnterContainer extends React.Component<PropsType> {

    componentDidMount () { 
        this.props.loginTC(this.props.login, this.props.pass); 
    }

    render () {
        return (
            <Enter login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        login: state.auth.login,
        pass: state.auth.pass,
        token: state.auth.token,
    }
}

export default connect<MapStatePropsType, MapDispatchPropsType, {}, AppStateType> (mapStateToProps, {loginTC}) (EnterContainer);