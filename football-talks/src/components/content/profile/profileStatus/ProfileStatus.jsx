import c from './ProfileStatus.module.css';
import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.profile.status,
    };

    activatedEditMode = () => {
        if (this.props.token === this.props.profile.token){
            this.setState({
                editMode: true,
            });
        }
    };

    deactivatedEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.setStatus(this.props.token, this.state.status);
    };

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        });
    }

    componentDidUpdate (prevProps, prevState) {
        if (prevProps.profile.status != this.props.profile.status) {
            this.setState({
                status: this.props.profile.status
            });
        }
    }

    render () {

        return(
            <div className={c.ProfileStatus}>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activatedEditMode}>{this.props.profile.status || 'No status'}</span>
                </div>
                }
                {this.state.editMode && <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivatedEditMode} value={this.state.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;