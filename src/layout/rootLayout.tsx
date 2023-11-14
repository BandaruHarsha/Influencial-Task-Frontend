import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import classes from "./rootlayout.module.scss";
import { useEffect } from "react";

const Rootlayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/signup");
    }
  }, []);
  return (
    <div className={classes.rootlayout}>
      <Navbar />
      <div className={classes.rootStyle}>
        <Sidebar />
        <div className={classes.mainSection}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Rootlayout;
