import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Add from './pages/Add/Add';
import Orders from './pages/Add/List/Orders/Orders';
import List from './pages/Add/List/List';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url="http://localhost:4000"
  return (
    <div>
      <ToastContainer/>
      {/* Navbar */}
      <Navbar />
      <hr />

      {/* App Content Layout */}
      <div className="app-content">
        {/* Sidebar */}
        <Sidebar />

        {/* Page Routes */}
        <Routes>
          <Route path="/add" element={<Add url={url}/>} />
          <Route path="/list" element={<List url={url}/>} />
          <Route path="/orders" element={<Orders url={url}/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
