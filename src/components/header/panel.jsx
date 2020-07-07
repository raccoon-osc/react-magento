import React from 'react';
import {Container} from "react-bootstrap";
import ActionLink from "components/header/panel/action-link";

class Panel extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className='panel-wrapper' fluid>
                    <Container className='panel-content'>
                        <ActionLink></ActionLink>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}

export default Panel;