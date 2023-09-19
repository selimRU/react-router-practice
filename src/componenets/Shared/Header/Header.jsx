import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className=' flex justify-center gap-3 bg-slate-500 py-5'>
            <NavLink to='/' className={({ isActive }) =>
                isActive ? 'underline bg-red-900 px-2 rounded-sm text-white' : ''
            }>Home</NavLink>
            <NavLink to='/about' className={({ isActive, isPending }) =>
                isActive ? 'underline bg-red-900 px-2 rounded-sm text-white' : ''
            }>About</NavLink>
            <NavLink to='/contact' className={({ isActive, isPending }) =>
                isActive ? 'underline bg-red-900 px-2 rounded-sm text-white' : ''
            }>Contact</NavLink>
        </nav>
    );
};

export default Header;