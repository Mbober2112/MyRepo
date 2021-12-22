import c from './ProfileStatus.module.css';
import React from 'react';

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
    };

    activatedEditMode () {
        this.setState({
            editMode: true,
        });
    };

    deactivatedEditMode () {
        this.setState({
            editMode: false,
        });
    };

    render () {
        return(
            <div className={c.ProfileStatus}>
                {!this.state.editMode && <div>
                    <span onDoubleClick={this.activatedEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode && <div>
                    <input autoFocus={true} onBlur={this.deactivatedEditMode.bind(this)} value={this.props.status}></input>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;