import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaWallet, FaUser, FaSignOutAlt, FaMoneyBillAlt, FaTimes, FaBars } from 'react-icons/fa';

import userImage from '../assets/images/persons.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Sidebar Container */}
      {isOpen && (
        <div className="fixed top-0 left-0 bg-primary flex flex-col gap-12 items-center text-white h-screen py-4 md:p-5 w-64 md:gap-24 md:w-72 lg:w-80 z-50">
          {/* Close Button - Show only on mobile view */}
          <button 
            onClick={toggleSidebar} 
            className="absolute top-4 right-4 text-white md:hidden"
          >
            <FaTimes size={24} />
          </button>
          
          {/* User Info */}
          <div className="flex flex-col justify-center gap-2 items-center w-full border-b-[1px] border-white">
            <div className="image-container">
              <img src={userImage} alt="" className='object-cover rounded-full h-32 w-32' />
            </div>
            <div className="contact-info text-center">
              <h2>John Doe</h2>
              <p>Bangladesh, India</p>
            </div>
          </div>

          {/* Sidebar Navigation */}
          <div>
            <ul className="space-y-4">
              <li className="text-lg font-semibold mb-5">Menu</li>
              <li className="hover:bg-gray-800 px-4 py-3 rounded-full">
                <Link to="/user/dashboard/tickets" className="flex items-center">
                  <FaTicketAlt className="mr-3" /> Tickets
                </Link>
              </li>
              <li className="hover:bg-gray-800 px-4 py-3 rounded-full">
                <Link to="/user/dashboard/transactions" className="flex items-center">
                  <FaMoneyBillAlt className="mr-3" /> Transactions
                </Link>
              </li>
              <li className="hover:bg-gray-800 px-4 py-3 rounded-full">
                <Link to="/user/dashboard/wallet" className="flex items-center">
                  <FaWallet className="mr-3" /> Wallet
                </Link>
              </li>
              <li className="hover:bg-gray-800 px-4 py-3 rounded-full">
                <Link to="/user/dashboard/account" className="flex items-center">
                  <FaUser className="mr-3" /> Account
                </Link>
              </li>
              <li className="hover:bg-gray-800 px-4 py-3 rounded-full">
                <Link to="/user/dashboard/logout" className="flex items-center">
                  <FaSignOutAlt className="mr-3" /> Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}

      {/* Toggle Sidebar Button - Show only on mobile view when sidebar is closed */}
      {!isOpen && (
        <button 
          onClick={toggleSidebar} 
          className="text-white fixed top-4 right-4 z-50 md:hidden"
        >
          <FaBars size={24} />
        </button>
      )}
    </>
  );
};

export default Sidebar;
