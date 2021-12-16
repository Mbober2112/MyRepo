import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { onLogin, changeAuthData } from "../../../redux/authReducer";

class AuthContainer extends React.Component {

    render () {
        return(
            <Auth login={this.props.login}
                pass = {this.props.pass}
                onLogin = {this.props.onLogin}
                changeAuthData = {this.props.changeAuthData}/>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        login: state.auth.login,
        pass: state.auth.pass,
    }
}

export default connect(mapStateToProps, {onLogin, changeAuthData}) (AuthContainer);