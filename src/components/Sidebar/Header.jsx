import { NavLink, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoMdHome } from "react-icons/io";
import { IoColorFill, IoStatsChart } from "react-icons/io5";
import { IoNewspaperOutline } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";

function Sidebar() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(
    JSON.parse(localStorage.getItem("userData"))
  );

  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("userData")));
  }, []);

  const fullname = userData?.fullname || "Mehmon";
  const avatar = userData?.avatar || "https://via.placeholder.com/150";

  const handleLogout = () => {
    localStorage.removeItem("userData");
    setUserData(null);
    navigate("/signup");
  };

  return (
    <>
      <div className="headerContainer">
        <div className="profile">
          {avatar && <img src={avatar} alt="Avatar" className="userAvatar" />}
          <h4>{fullname}</h4>
        </div>
        <hr />
        <div className="menu">
          <ul>
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <div className="logout" onClick={handleLogout}>
                <NavLink>Log Out</NavLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
