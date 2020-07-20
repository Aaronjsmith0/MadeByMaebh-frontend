import React, {Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {signout, isAuthenticated} from '../auth';
import {itemTotal} from './cartHelpers';

const isActive = (history, path) => {
    if(history.location.pathname === path) {
        return {color: 'black'}
    } else {
        return {color: '#ff1493'}
    }
};

const Menu = ({history}) => (
        <div className='row'>
            <div className='col-10 navBarLinks'>
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/')} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" style={isActive(history, '/shop')} to="/shop">Shop</Link>
                    </li>
                    <li className="nav-item">
                        <Link 
                            className="nav-link" 
                            style={isActive(history, '/cart')} 
                            to="/cart"
                        >
                            Cart <sup><small className='cart-badge'>{itemTotal()}</small></sup>
                        </Link>
                    </li>
                    {isAuthenticated() && isAuthenticated().user.role === 0 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/user/dashboard')} to="/user/dashboard">Dashboard</Link>
                        </li>
                    )}
                    {isAuthenticated() && isAuthenticated().user.role === 1 && (
                        <li className="nav-item">
                            <Link className="nav-link" style={isActive(history, '/admin/dashboard')} to="/admin/dashboard">Dashboard</Link>
                        </li>
                    )}
                    {!isAuthenticated() && (
                        <Fragment>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/signin')} to="/signin">Signin</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={isActive(history, '/signup')} to="/signup">Signup</Link>
                            </li>
                        </Fragment>
                    )}
                    {isAuthenticated() && (
                        <li className="nav-item">
                            <span className="nav-link" style={{cursor: 'pointer', color: '#e73c7e'}} 
                                onClick={() => signout(() => {
                                    history.push('/')
                                })}
                                >Signout
                            </span>
                        </li>
                    )}
                </ul>
            </div>
            <div className='col-2 madeByMaebh'>
                <span className='navbar-text'>MadeByMaebh.</span>
            </div>
        </div>
);

export default withRouter(Menu);