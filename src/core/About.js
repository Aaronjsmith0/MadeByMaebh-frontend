import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import Card from './Card';

const About = () => {
    const [error, setError] = useState(false)

    return (
        <Layout title="MadeByMaebh" description="About MadeByMaebh!" className='container-fluid'>
            <h2 className='mb-4' style={{textAlign: 'center'}}>About Maebh</h2>
            
        </Layout>
    );
};

export default About;