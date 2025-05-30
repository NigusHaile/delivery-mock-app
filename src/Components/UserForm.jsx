import React, { useEffect, useState } from 'react';
import userService from '../Services/UserService';
import { useNavigate, useParams } from 'react-router-dom';

const UserForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [user, setUser] = useState({
    userName: '',
    firstName: '',
    middleName: '',
    lastName: '',
    phoneNumber: '',
    email: ''
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (id) {
      userService.getUserById(id).then(res => {
        setUser(res.data);
      });
    }
  }, [id]);

  const validate = () => {
    const newErrors = {};
    if (!user.userName || user.userName.length < 3 || user.userName.length > 20)
      newErrors.userName = 'Username must be between 3 and 20 characters';
    if (!user.firstName) newErrors.firstName = 'First name is required';
    if (!user.lastName) newErrors.lastName = 'Last name is required';
    if (!user.email || !/\S+@\S+\.\S+/.test(user.email))
      newErrors.email = 'Email is invalid';
    if (
      !/^[+]?[(]?[0-9]{1,4}[)]?[-\s.0-9]{9,15}$/.test(user.phoneNumber)
    )
      newErrors.phoneNumber = 'Phone number is invalid';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    try {
      if (id) {
        await userService.updateUser(id, user);
      } else {
        await userService.createUser(user);
      }
      navigate('/');
    } catch (err) {
      alert(err.response?.data || 'Error saving user');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{id ? 'Edit User' : 'User Registration Form'}</h2>

      <input name="firstName" placeholder="First Name" value={user.firstName} onChange={handleChange} />
      {errors.firstName && <span className="error">{errors.firstName}</span>}

      <input name="middleName" placeholder="Middle Name" value={user.middleName} onChange={handleChange} />

      <input name="lastName" placeholder="Last Name" value={user.lastName} onChange={handleChange} />
      {errors.lastName && <span className="error">{errors.lastName}</span>}

      <input name="userName" placeholder="Username" value={user.userName} onChange={handleChange} />
            {errors.userName && <span className="error">{errors.userName}</span>}

      <input name="phoneNumber" placeholder="Phone Number" value={user.phoneNumber} onChange={handleChange} />
      {errors.phoneNumber && <span className="error">{errors.phoneNumber}</span>}

      <input name="email" placeholder="Email" value={user.email} onChange={handleChange} />
      {errors.email && <span className="error">{errors.email}</span>}

      <button type="submit">{id ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default UserForm;