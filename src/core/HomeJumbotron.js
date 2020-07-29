import React from 'react';
import Menu from './Menu';
import MaebhStanding from '../images/maebhStanding.jpg';
import '../styles.css';

const HomeJumbotron = ({title = 'Title', description = 'Description', className, children}) => (
    <div className='container-fluid'>
        <Menu />
        <div className="jumbotron homeJumbotron">
                <div className='row'>
                    <div className='col-md-6 col-sm-12 col-xs-12'>
                        <img src={MaebhStanding} className='maebhStandingPic mr-5' />
                    </div>
                    <div className='homeJumboDescription col-md-6 col-sm-12 col-xs-12'>
                        <div className='homeH2P ml-5'>
                            <h2>{title}</h2>
                            <p className="lead">{description}</p>
                        </div>
                    </div>
                </div>
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default HomeJumbotron;