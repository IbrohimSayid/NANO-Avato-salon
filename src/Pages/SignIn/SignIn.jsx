import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./SignIn.css";
import SignInImg from "../../img/SignUpImg.png";

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();

      const user = data.users.find(
        (user) => user.email === email && user.password === password
      );

      if (user) {
        navigate("/dashboard");
      } else {
        alert("Unknown user, incorrect email or password.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="signinContainer">
      <div className="SignInImg">
        <img src={SignInImg} alt="IMG" />
      </div>
      <form onSubmit={handleSubmit} className="signinForm">
        <div className="title">
          <h1>Nice to meet you</h1>
        </div>
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
          Don't have an account?<Link to="/signup">SignUp</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
