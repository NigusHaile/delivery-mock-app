import React from 'react';
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './Components/UserList';
import UserForm from './Components/UserForm';
import UserDetails from './Components/UserDetails';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Link to="/create" className="add-user-btn">Add User</Link>
      </nav>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/edit/:id" element={<UserForm />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </Router>
  );
}

export default App;