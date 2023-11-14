import classes from "./navbar.module.scss";
import navbarlogo from "../../Assets/navbarlogo.png";
import { Avatar, Badge, Button } from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SearchIcon from "@mui/icons-material/Search";
import avatar from "../../Assets/Avatar.png";
import { useDispatch } from "react-redux";
import { signOut } from "../../utils/Redux/userSlice";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSignOut = () => {
    try {
      window.localStorage.removeItem("user");
      dispatch(signOut());
      navigate("/signup");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className={classes.navbar}>
      <img src={navbarlogo} alt="" width="120px" height="24px" />
      <div className={classes.rightSection}>
        <Badge badgeContent={5} color="error">
          <NotificationsNoneIcon />
        </Badge>
        <SearchIcon />
        <Avatar alt="Remy Sharp" src={avatar} />
        <Button onClick={handleSignOut}>Signout</Button>
      </div>
    </div>
  );
};

export default Navbar;
