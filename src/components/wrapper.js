import React from 'react';
import Header from "./header";
import MainContent from "./main_content";
import Footer from "./footer";

class Wrapper extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Header></Header>
                <MainContent></MainContent>
                <Footer></Footer>
            </React.Fragment>
        );
    }
}

export default Wrapper;