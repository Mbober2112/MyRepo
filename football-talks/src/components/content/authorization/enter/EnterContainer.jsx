import React from "react";
import Enter from "./Enter";
import { setUserToken } from "../../../../redux/authReducer";
import * as axios from 'axios';
import { connect } from 'react-redux';
import { EnterApi } from "../../../../api/api";

class EnterContainer extends React.Component {

    componentDidMount () {  
        EnterApi.enter(this.props.login, this.props.pass).then(token => {    
            this.props.setUserToken(token);
        })
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

export default connect (mapStateToProps, {setUserToken}) (EnterContainer);