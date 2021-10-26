import React from 'react';
import LoadProduct from '../LoadProduct/LoadProduct';
import NavBar from '../NavBar/NavBar'
import SearchBox from '../SearchBox/SearchBox';

const Home = () => {
    return (
        <>
            <NavBar />
            <SearchBox />
            <LoadProduct />
        </>
    );
};

export default Home;