import React from 'react'
import Navbar from './Navbar';
import Header from './header';

import Particles from 'react-particles-js';

export const Home = () => {
    return (
        <>
            
            <Navbar />
            <Header />
            <Particles 
                params={{
                    particles:{
                        number: {
                            value: 45
                        }
                    }
                }}
            />
        </>
    )
}

export default Home;
