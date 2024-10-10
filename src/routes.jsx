import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


import Dashboard from "./dashboard/Dashboard"
import Tickets from './dashboard/pages/Tickets';
import Transactions from './dashboard/pages/Transactions';
import Wallet from './dashboard/pages/Wallet';
import Account from './dashboard/pages/Account';
import Logout from './dashboard/pages/Logout';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* doctor routes */}
                <Route path='/user/'>
                    <Route path="/user/dashboard/" element={<Dashboard />}>
                        <Route path="/user/dashboard/tickets" element={<Tickets />} />
                        <Route path="/user/dashboard/transactions" element={<Transactions />} />
                        <Route path="/user/dashboard/wallet" element={<Wallet />} />
                        <Route path="/user/dashboard/account" element={<Account />} />
                        <Route path="/user/dashboard/logout" element={<Logout />} />
                    </Route>
                </Route>
            </Routes>
        </Router>

    )
}

export default AppRoutes