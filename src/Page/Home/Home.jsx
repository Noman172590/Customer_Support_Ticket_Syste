import React from 'react';
import NavBar from '../../Components/Navbar/NavBar';
import Banner from '../../Components/Share/Banner';

const Home = () => {
    return (
        <div>
            <NavBar/>
            <div className='max-w-7xl mx-auto border p-4 flex gap-6 '>
                <Banner/>
                <Banner number="0" InProgress="Resolved" backgroundColor="#0D8E77"  />
            </div>
        </div>
    );
};

export default Home;