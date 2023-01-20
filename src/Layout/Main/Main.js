import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../../Sheard/Footer/Footer';
import Header from '../../Sheard/Header/Header';
import Navigationbar from '../../Sheard/Navbar/Navigationbar';

const Main = () => {
    return (
        <div>
            <Navigationbar></Navigationbar>
            <Header></Header>
            <Container>

                <Outlet></Outlet>

            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;