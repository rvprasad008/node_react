import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Login = () => {
  const history = useNavigate();
  const [inputChange, setInputChange] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputChange({
      ...inputChange,
      [name]: value,
    });
  };
  const handleSubmit =  async e  => {
    const request = {
      email: inputChange.email,
      password: inputChange.password,
    };
    console.log("request", request);
      //API CALL 
    const response = await loginUser(request);
    console.log(response.user);
     
        localStorage.setItem('accessToken', response['token']);
        localStorage.setItem('user', JSON.stringify(response['user']));
        if(response.user.role=="EMPLOYEE"){
          window.location.href = "/profile";
        }else{
          window.location.href = "/details";
        }
        
  };

  return (
    <div className="login-page">
      <div className="form-box">
        <h4>Login Form</h4>
        <div className="form-control">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-input"
            name="email"
            value={inputChange.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-input"
            name="password"
            value={inputChange.password}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-control">
          <button
            name="submit"
            onClick={handleSubmit}
            className="btn btn-small"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
