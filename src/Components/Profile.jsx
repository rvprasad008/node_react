import React from "react";
async function loginUser(credentials) {
  return fetch('http://localhost:8000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

 
const Profile = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="profile">
      <tr>
        <th>Name</th>
        <td>{user.name}</td>
      </tr>
      <tr>
        <th>Email</th>
        <td>{user.email}</td>
      </tr>
      <tr>
        <th>Role</th>
        <td>{user.role}</td>
      </tr>
    </div>
  );
};

export default Profile;
