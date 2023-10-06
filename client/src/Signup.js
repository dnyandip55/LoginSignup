import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Signup.css'; 


function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.trim() || !password.trim() || !name.trim()){
      alert("Please Fill All the Fields");
      return ;
    }
    axios
      .post("http://127.0.0.1:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Register Successful");

        navigate('/login');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signup-container">
      <div className="form-container">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="form-label">
            Name:
          </label>
          <input
            type="text"
            placeholder="Enter Name"
            autoComplete="off"
            name="name"
            className="form-input"
            onChange={(e) => setName(e.target.value)}
          />

          <label htmlFor="email" className="form-label">
            Email:
          </label>
          <input
            type="email"
            placeholder="Enter Email"
            autoComplete="off"
            name="email"
            className="form-input"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password" className="form-label">
            Password:
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="form-input"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="form-button">
            Register
          </button>
        </form>
        <p className="login-text">Already Have an Account</p>
        <Link to="/login" className="link-button">
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;

