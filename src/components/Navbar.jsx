import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div className="flex flex-col gap-4 w-full px-2 md:px-0 mx-auto md:w-11/12">
            <nav className="flex justify-between items-center py-4">
                <div className="text-xl font-bold">
                    <Link to="/">Ticketify</Link>
                </div>
                <ul className="flex gap-4">
                    <li>
                        <Link to="/home" className="hover:text-gray-700">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="hover:text-gray-700">About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="hover:text-gray-700">Contact</Link>
                    </li>
                    <li>
                        <Link to="/profile" className="hover:text-gray-700">Profile</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;