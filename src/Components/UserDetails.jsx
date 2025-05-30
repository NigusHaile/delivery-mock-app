import React, { useEffect, useState } from 'react';
import userService from '../Services/UserService';
import { useParams } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    userService.getUserById(id).then(res => setUser(res.data));
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.userName}</h2>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phoneNumber}</p>
      <p><strong>Name:</strong> {user.firstName} {user.middleName} {user.lastName}</p>
    </div>
  );
};

export default UserDetails;