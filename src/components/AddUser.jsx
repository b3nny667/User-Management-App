import React, { useState } from 'react';

const AddUser = ({ setUsers }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!name || !email) {
      alert('Name and Email are required!');
      return;
    }

    const newUser = {
      id: Date.now(), 
      name,
      email,
      company: {
        name: company || 'Unknown Company'
      },
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: ''
      },
      phone: '',
      website: ''
    };

    
    setUsers(prevUsers => [newUser, ...prevUsers]);
    
    
    setName('');
    setEmail('');
    setCompany('');
  };

  return (
    <div className="add-user-form">
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="form-input"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="email"
            placeholder="Email *"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-input"
          />
        </div>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;