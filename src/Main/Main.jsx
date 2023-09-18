import React from 'react';
import Header from '../componenets/Shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../componenets/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;