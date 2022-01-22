import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
    return(
        <nav className='navbar'>
            <h1>Nobody's blog</h1>
            <div className='links'>
                <NavLink to="/" className="navLinks">Home</NavLink>
                <NavLink to='/create' className="navLinks">Create new blog</NavLink>
            </div>
        </nav>
    );
}