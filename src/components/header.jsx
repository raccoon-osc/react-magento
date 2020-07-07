import React from 'react';
import {Container} from "react-bootstrap";
import Panel from "components/header/panel";
import Content from "components/header/content";


class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className='content' fluid>
                    <Panel></Panel>
                    <Content></Content>
                </Container>
            </React.Fragment>
        );
    }
}

export default Header;