import React from 'react';

const UserList = ({ users, onUserClick }) => {
  return (
    <div>
      <h2>Users ({users.length})</h2>
      {users.map(user => (
        <div 
          key={user.id} 
          onClick={() => onUserClick(user)}
          className="user-card"
        >
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Company: {user.company?.name}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;