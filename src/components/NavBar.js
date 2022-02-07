import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import MoveMateLogo from '../MoveMate.png'
import { Calendar } from '@natscale/react-calendar';

const NavBar = () => {

    return (
        <Navbar bg="white" variant="light">
        <Container>
            <Navbar.Brand>
                <img
                    alt=""
                    src={MoveMateLogo}
                    width="150"
                    height="100"
                    className="d-inline-block align-top"
                />{' '}

            </Navbar.Brand>

        </Container>
    </Navbar>

    )

};


export default NavBar;
