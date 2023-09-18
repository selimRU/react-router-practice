import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' flex justify-center gap-3 bg-slate-500 py-5'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Header;