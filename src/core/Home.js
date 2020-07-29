import React, { useState, useEffect } from 'react';
import HomeJumbotron from './HomeJumbotron';
import { getProducts } from './apiCore';
import Card from './Card';
import Footer from './Footer';

const Home = () => {
    const [productsByArrival, setProductsByArrival] = useState([])
    const [error, setError] = useState(false)

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            if(data.error) {
                setError(data.error)
            } else {
                setProductsByArrival(data)
            }
        })
    }

    useEffect(() => {
        loadProductsByArrival()
    }, [])

    return (
        <HomeJumbotron title="MadeByMaebh" description="Welcome to MadeByMaebh" className="container-fluid">
            <div className="separator mb-4 mr-5 ml-5">Most Recent Pieces By Maebh</div>
            <div className='container'>
                <div className='row'>
                    {productsByArrival.map((product, i) => (
                        <div key={i} className='col-lg-3 col-md-4 col-sm-6 col-xs-6 mb-3'>
                            <Card product={product} />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </HomeJumbotron>
    );
};

export default Home;