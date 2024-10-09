// src/components/Dashboard.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components//Sidebar';


import Tickets from './pages/Tickets';
import Transactions from './pages/Transactions';
import Wallet from './pages/Wallet';
import Account from './pages/Account';
import Logout from './pages/Logout';

const DashBoard = () => {
  return (
    <>
      <div className="flex w-screen bg-slate-200">
        <div className="flex w-max h-screen sticky top-0">
          <Sidebar />
        </div>
        <div className="flex-1 overflow-y-auto">
          <Routes>
            <Route path="/tickets" element={<Tickets />} />
            <Route path="/transactions" element={<Transactions />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/account" element={<Account />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default DashBoard;