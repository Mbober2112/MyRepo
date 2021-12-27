import Header from "./Header";
import { changeAuthData } from "../../redux/authReducer";
import { connect } from "react-redux";
import React from "react";


class HeaderContainer extends React.Component {

    render() {
        return (
            <Header changeAuthData={this.props.changeAuthData} />
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, { changeAuthData })(HeaderContainer);