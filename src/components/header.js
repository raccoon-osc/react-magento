import React from 'react';
import Panel from './header/panel'
import Content from './header/content'
import Nav from './header/nav'

class Header extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Panel></Panel>
                <Content></Content>
                <Nav></Nav>
            </React.Fragment>
        );
    }
}

export default Header;