import React, { useState, useEffect } from 'react';
import firebase from '../firebase';
import '../App.css'; // Import CSS file for styling

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {

        const usersRef = firebase.database().ref('users');
      usersRef.on('value', (snapshot) => {
        const usersData = snapshot.val();
        const usersList = [];
        for (let id in usersData) {
          usersList.push({ id, ...usersData[id] });
        }
        setUsers(usersList);
      });
    };
    fetchUsers();
  }, []);

  const handleDeleteUser = (userId) => {

    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.remove();
  };

  const handleToggleStatus = (userId) => {

    const userRef = firebase.database().ref(`users/${userId}`);
    userRef.update({ active: false }); 
  };

  return (
    <div className="users-table-container">
      <h2>Active Users</h2>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Added Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.addedDate}</td>
              <td>{user.active ? 'Active' : 'Inactive'}</td>
              <td>
                <button onClick={() => handleToggleStatus(user.id)}>
                  Toggle Status
                </button>
                <button onClick={() => handleDeleteUser(user.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;