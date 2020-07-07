import React from 'react';

class ActionLink extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="panel-action-link d-flex justify-content-end">
                    <p>Default welcome msg!</p>
                    <p>Sign In</p>
                    <p>or</p>
                    <p>Create an Account</p>
                </div>
            </React.Fragment>
        );
    }
}

export default ActionLink;