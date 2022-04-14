import React, { useEffect, useState } from "react";

async function userdetail(token) {
  return fetch('http://localhost:8000/api/users', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token':token
    },
    // body: JSON.stringify({'x-access-token':token})
  })
    .then(data => data.json())
 }

const UserDetails = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    getUserDetails(); //This method will fetch the data automatically when the page intial renders
  }, []);
 
  const getUserDetails = async () => {
    //API CALL TO FETCH THE USER DETAILS DATA
    const data = await userdetail(localStorage.getItem('accessToken'));
    console.log(data.user);
    setTableData(data.user);
  };
  return (
    <div className="user-details">
      <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
        </tr>
        {tableData &&
          tableData.length &&
          tableData.map((tData, index) => {
            return (
              <tr key={index}>
                {/* Here map according with the name or key like tData.name */}
                <td>{tData.name}</td>
                <td>{tData.email}</td>
                <td>{tData.role}</td>
              </tr>
            );
          })}
      </table>
    </div>
  );
};


export default UserDetails;
