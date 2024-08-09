import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const storedData = localStorage.getItem("userData");
    const userData = storedData ? JSON.parse(storedData) : null;

    if (
      userData &&
      userData.email === email &&
      userData.password === password
    ) {
      navigate("/dashboard");
    } else {
      alert("Unknown user, incorrect email or password.");
    }
  };

  return (
    <div className="signinContainer">
      <div className="signinTitle">
        <h1>Nice to see you!</h1>
        <p>Enter your email and password to sign in</p>
      </div>
      <form onSubmit={handleSubmit} className="signinForm">
        <div className="signinInput">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="signinInput">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="signinBtn">
          Sign In
        </button>
        <p className="havenotAccount">
          Dont have an account?<Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
