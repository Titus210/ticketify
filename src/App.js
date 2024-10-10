import React from 'react';
import AppRoutes from "./routes.jsx"
import Navbar from "./components/Navbar.jsx"

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto ">
      <div className="navbar">
        {/* <Navbar /> */}
      </div>
         <AppRoutes />
      </div>
  );
}

export default App;
