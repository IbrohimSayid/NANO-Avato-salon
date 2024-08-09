import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import SignUpIMG from "../../img/SignUpImg.png";

function SignUp() {
  const [formData, setFormData] = useState({
    fullname: "",
    avatar: "",
    email: "",
    password: "",
  });
  const [save, setSave] = useState(false);
  const navigate = useNavigate(); // useNavigate hook'dan foydalanish

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { fullname, email, password } = formData;

    if (fullname && email && password) {
      const fakeApiCall = () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ success: true }), 1000)
        );

      fakeApiCall().then((response) => {
        if (response.success && save) {
          localStorage.setItem("userData", JSON.stringify(formData));
          navigate("/dashboard"); // Bu yerda navigate ni to'g'ridan-to'g'ri chaqiramiz
        }
      });
    } else {
      alert("Please fill in all the fields.");
    }
  };

  return (
    <div className="signupCotainer">
      <div className="SignUpFormContainer">
        <div className="FormImg">
          <img src={SignUpIMG} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="signupForm">
          <div className="title">
            <h1>Welcome</h1>
            <p>Please register for use</p>
          </div>
          <div className="signupInput">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="fullname"
              placeholder="Your full name"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signupInput">
            <label htmlFor="avatar">Avatar</label>
            <input
              type="url"
              name="avatar"
              placeholder="Avatar link"
              value={formData.avatar}
              onChange={handleChange}
            />
          </div>

          <div className="signupInput">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your Email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="signupInput">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <label className="checkboxInput">
            <input
              type="checkbox"
              name="save"
              checked={save}
              onChange={(e) => setSave(e.target.checked)}
            />
            Remember me
          </label>

          <button type="submit" className="signupBtn">
            Sign Up
          </button>
          <p className="haveAccount">
            Already have an account?<Link to="/login">SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
