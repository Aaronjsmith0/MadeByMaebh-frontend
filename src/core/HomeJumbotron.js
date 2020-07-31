import React from 'react';
import Menu from './Menu';
import MaebhStanding from '../images/maebhStanding.jpg';
import Slideshow from './SlideShow';
import '../styles.css';

const HomeJumbotron = ({title = 'Title', description = 'Description', className, children}) => (
    <div className='container'>
        <Menu />
        <div className="jumbotron homeJumbotron">
            <div className="separator mb-4 mt-2 mr-4 ml-4">{title}</div>
            <Slideshow />
        </div>
        <div className={className}>{children}</div>
    </div>
);

export default HomeJumbotron;