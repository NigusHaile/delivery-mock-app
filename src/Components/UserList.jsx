import React, { useEffect, useState } from 'react';
import userService from '../Services/UserService';
import { Link } from 'react-router-dom';
import './UserList.css'; // Create this CSS file

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    userService.getAllUsers().then(res => setUsers(res.data));
  }, []);

  const handleDelete = async id => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      await userService.deleteUser(id);
      setUsers(users.filter(u => u.id !== id));
    }
  };

  return (
    <div className="user-management-container">
      <br/>
      <h2> <center> Users List </center></h2>

      <ol className="user-list">
        {users.map((user, index) => (
          <li key={user.id} className="user-list-item">
            <div className="user-info">
              <span className="user-name">{user.userName}</span>
              <span className="user-email">- {user.email}</span>
            </div>
            <div className="user-actions">
              <Link to={`/edit/${user.id}`} className="action-btn edit-btn">Edit</Link>
              <button onClick={() => handleDelete(user.id)} className="action-btn delete-btn">Delete</button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserList;
