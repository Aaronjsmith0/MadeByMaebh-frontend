import React from 'react';
import {Link} from 'react-router-dom';
import { Fade } from 'react-slideshow-image';
import OilPastels from '../images/oilPastels.JPG';
import MaebhBW from '../images/maebhBW.JPG';
import Pumpkins from '../images/pumpkins.JPG';
import 'react-slideshow-image/dist/styles.css'

const Slideshow = () => {
    return (
        <div className='container-fluid'>
            <div className="slide-container">
                <Fade arrows={false}>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={OilPastels} />
                            <Link to='/shop'>
                                <button className="slideButton">Shop</button>
                            </Link>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={MaebhBW} />
                            <Link to='/about'>
                                <button className="slideButton">About</button>
                            </Link>
                        </div>
                    </div>
                    <div className="each-fade">
                        <div className="image-container">
                            <img src={Pumpkins} />
                            <Link to='/shop'>
                                <button className="slideButton">Shop</button>
                            </Link>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Slideshow;