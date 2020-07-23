import React, {Fragment, useState} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';
import {itemTotal} from './cartHelpers';
import Shoppingbag from '../images/shoppingbag.png';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import '../styles.css';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: '#C71585'}
    } else {
        return {color: '#ff1493'}
    }
};

const Menu = ({history}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        

        <div>
            <Navbar color="white" light expand="md">
            <NavbarBrand href="/">
                <span className='navbar-header'>madebymaebh.</span>
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/" style={isActive(history, '/')}>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/shop" style={isActive(history, '/shop')}>Shop</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about" style={isActive(history, '/about')}>About</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret style={{color: '#ff1493'}}>
                            User
                        </DropdownToggle>
                        <DropdownMenu right>
                            <DropdownItem>
                                {isAuthenticated() && isAuthenticated().user.role === 0 && (
                                    <div className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link>
                                    </div>
                                )}
                                {isAuthenticated() && isAuthenticated().user.role === 1 && (
                                    <div className="nav-item">
                                        <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">Dashboard</Link>
                                    </div>
                                )}
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>
                                {!isAuthenticated() && (
                                    <Fragment>
                                        <div className="nav-item">
                                            <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Signin</Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                                        </div>
                                    </Fragment>
                                )}
                                {isAuthenticated() && (
                                    <div className="nav-item">
                                        <span className="nav-link" style={{cursor: 'pointer', color: '#e73c7e'}} 
                                            onClick={() => signout(() => {
                                                history.push('/')
                                            })}
                                            >Signout
                                        </span>
                                    </div>
                                )}
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                    <Link 
                        className="nav-link bagDiv" 
                        style={isActive(history, '/cart')} 
                        to="/cart"
                    >
                        <img src={Shoppingbag} className='shoppingbag' />
                        <sup><small className='cart-badge'>{itemTotal()}</small></sup>
                    </Link>
            </Collapse>
            </Navbar>
        </div>
    );
};

export default withRouter(Menu);