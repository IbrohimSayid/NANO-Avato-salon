import React from "react";
import { Outlet } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Products from "../Pages/Products/Products";
import Sidebar from "../components/Sidebar/Header";

function Layout() {
  return (
    <>
        <Sidebar />
        <Outlet>
          <Dashboard />
          <Products />
        </Outlet>
    </>
  );
}

export default Layout;
