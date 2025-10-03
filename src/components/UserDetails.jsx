import React from 'react';

const UserDetails = ({ user, onBack }) => {
  return (
    <div>
      <button onClick={onBack} className="back-button">
        ← Back to List
      </button>
      <div className="user-details-container">
        <h1>{user.name}</h1>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Website:</strong> {user.website}</p>
        <p><strong>Address:</strong></p>
        <p>
          {user.address?.street}, {user.address?.suite}<br />
          {user.address?.city}, {user.address?.zipcode}
        </p>
        <p><strong>Company:</strong> {user.company?.name}</p>
        <p><em>{user.company?.catchPhrase}</em></p>
      </div>
    </div>
  );
};

export default UserDetails;