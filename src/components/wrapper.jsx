import React from 'react';
import {Container} from 'react-bootstrap';
import Header from "components/header";
import Nav from "components/nav";

class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className='wrapper' fluid>
                    <Header></Header>
                    <Nav></Nav>
                </Container>
            </React.Fragment>
        );
    }
}

export default Wrapper;