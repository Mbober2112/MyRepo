import React from "react";
import { connect } from "react-redux";
import Auth from "./Auth";
import { onLogin, changeAuthData, loginTC } from "../../../redux/authReducer";
import { compose } from "redux";
import { withEnterRedirect } from "../../../hoc/withEnterRedirect";

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

export default compose (
    connect(mapStateToProps, {onLogin, changeAuthData}),
    withEnterRedirect,) (AuthContainer);

// export default connect(mapStateToProps, {onLogin, changeAuthData}) (AuthContainer);