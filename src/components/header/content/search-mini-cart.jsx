import React from 'react';
import {Container, Row, Col, InputGroup, FormControl, Button, Form} from "react-bootstrap";

class SearchMiniCart extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Col md='4'>
                    <Form>
                    <InputGroup className="hearder-search-mini-cart">
                        <FormControl
                            placeholder="Search entire store here..."
                            aria-label=""
                            aria-describedby=""
                        />
                        <InputGroup.Append>
                            <Button variant="btn-outline-light" className='btn-search' type='submit'>
                                <i className="fa fa-search" aria-hidden="true"></i>
                            </Button>
                            <Button variant="btn-outline-light" className='btn-cart'>
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                    </Form>
                </Col>
            </React.Fragment>
        );
    }
}

export default SearchMiniCart;