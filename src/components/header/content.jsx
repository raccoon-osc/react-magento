import React from 'react';
import {Container, Row} from "react-bootstrap";
import Logo from "components/header/content/logo";
import SearchMiniCart from "components/header/content/search-mini-cart";

class Content extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Container className='header-content-wrapper' fluid>
                    <Container className='header-content-content'>
                        <Row>
                            <Logo></Logo>
                            <SearchMiniCart></SearchMiniCart>
                        </Row>
                    </Container>
                </Container>
            </React.Fragment>
        );
    }
}

export default Content;