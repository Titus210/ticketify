// src/components/Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaTicketAlt, FaWallet, FaUser, FaSignOutAlt, FaMoneyBillAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="bg-gray-900 text-white h-screen p-5 w-64 md:w-72 lg:w-80">
      <ul className="space-y-4">
        <li className="text-lg font-semibold mb-5">Menu</li>
        <li className="hover:bg-gray-800 p-3 rounded-md">
          <Link to="/tickets" className="flex items-center">
            <FaTicketAlt className="mr-3" /> Tickets
          </Link>
        </li>
        <li className="hover:bg-gray-800 p-3 rounded-md">
          <Link to="/transactions" className="flex items-center">
            <FaMoneyBillAlt className="mr-3" /> Transactions
          </Link>
        </li>
        <li className="hover:bg-gray-800 p-3 rounded-md">
          <Link to="/wallet" className="flex items-center">
            <FaWallet className="mr-3" /> Wallet
          </Link>
        </li>
        <li className="hover:bg-gray-800 p-3 rounded-md">
          <Link to="/account" className="flex items-center">
            <FaUser className="mr-3" /> Account
          </Link>
        </li>
        <li className="hover:bg-gray-800 p-3 rounded-md">
          <Link to="/logout" className="flex items-center">
            <FaSignOutAlt className="mr-3" /> Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
