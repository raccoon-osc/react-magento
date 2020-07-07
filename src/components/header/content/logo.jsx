import React from 'react';
import {Col} from "react-bootstrap";
class Logo extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Col md='7'>
                    <a className='header-logo' href="zhjfgklsdhg">
                        <img src="http://magento-react.local/static/version1593093240/frontend/Magento/luma/en_US/images/logo.svg" alt="http://magento-react.local/static/version1593093240/frontend/Magento/luma/en_US/images/logo.svg" width='148' height='43'/>
                    </a>
                </Col>
            </React.Fragment>
        );
    }
}

export default Logo;