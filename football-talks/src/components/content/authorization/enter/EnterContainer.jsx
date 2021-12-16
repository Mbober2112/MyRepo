import React from "react";
import Enter from "./Enter";
import { setUserToken } from "../../../../redux/authReducer";
import * as axios from 'axios';
import { connect } from 'react-redux';

class EnterContainer extends React.Component {

    componentDidMount () {  
        axios.get(`http://localhost:8080/auth`, {headers:{login: this.props.login, password: this.props.pass}}).then(response => {    
            debugger;
            this.props.setUserToken(response.data.token);
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