import React from 'react';
import Menu from './Menu';
import '../styles.css';
import Footer from './Footer';

const Instagram = () => {

    return (
        <div className='container'>
            <Menu />
            <div className="separator mb-4 mt-5"><i className="fab fa-2x fa-instagram mr-2"></i>madebymaebh</div>
            <div id="curator-feed-default-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div>
            <Footer />
        </div>
    );
};

export default Instagram;