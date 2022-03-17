import Header from "./Header";
import { changeAuthData } from "../../redux/authReducer";
import { connect } from "react-redux";
import React from "react";
import { AppStateType } from "../../redux/reduxStore";

type MapDispatchPropsType = {
    changeAuthData: (a: string, b: string) => void,
}

class HeaderContainer extends React.Component<MapDispatchPropsType> {

    render() {
        return (
            <Header changeAuthData={this.props.changeAuthData} />
        )
    }
}

const mapStateToProps = (state: AppStateType) => {
    return {

    }
}

export default connect(mapStateToProps, { changeAuthData })(HeaderContainer);