import React from "react";
import Enter from "./Enter";
import { loginTC } from "../../../../redux/authReducer";
import { connect } from 'react-redux';

class EnterContainer extends React.Component {

    componentDidMount () { 
        this.props.loginTC(this.props.login, this.props.pass); 
    }

    render () {
        return (
            <Enter login={this.props.login}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        login: state.auth.login,
        pass: state.auth.pass,
        token: state.auth.token,
    }
}

export default connect (mapStateToProps, {loginTC}) (EnterContainer);