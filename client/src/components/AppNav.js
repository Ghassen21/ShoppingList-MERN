import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container,
    NavLink
} from 'reactstrap';

export default class AppNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.handleToggle = this.handleToggle.bind(this);
    }
    handleToggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">ShoppingList</NavbarBrand>
                        <NavbarToggler onClick={this.handleToggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                               <NavItem>
                                   <NavLink href="https://www.linkedin.com/in/ghassen-ayed-560236137/">Linkedin</NavLink>
                               </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}
