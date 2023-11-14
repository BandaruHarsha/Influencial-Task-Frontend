import { Button, TextField, Typography } from "@mui/material";
import classes from "./signupform.module.scss";
import googleIcon from "../../Assets/Google.png";
import appleicon from "../../Assets/apple.png";
import { CheckBox } from "@mui/icons-material";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signIn } from "../../utils/Redux/userSlice";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormdata] = useState({
    firstname: "",
    lastname: "",
    creatorname: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    loginemail: "",
    loginpassword: "",
  });

  const updateFieldValue = (event: ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormdata({ ...formData, [event.target.name]: event.target.value });
  };

  const [openSignIn, setOpenSignIn] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (formData.password === formData.confirmPassword) {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_END_POINT}/signup`,
          {
            firstName: formData.firstname,
            lastName: formData.lastname,
            email: formData.email,
            phone: formData.phoneNumber,
            creatorName: formData.creatorname,
            password:
              formData.password === formData.confirmPassword
                ? formData.password
                : null,
          }
        );
        dispatch(
          signIn({
            userDetails: { ...res.data.content },
          })
        );
        const user = res.data.content;
        window.localStorage.setItem("user", JSON.stringify(user));
        navigate("/");
      } catch (error) {
        if (axios.isAxiosError(error) && error.response?.status === 400) {
          window.alert("User with emailid already exist");
        }
      }
    } else {
      window.alert("Password and confirm password should be same");
    }
  };

  const handleLogin = async (event: FormEvent) => {
    event.preventDefault();
    console.log(loginData);
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_END_POINT}/signin`,
        {
          email: loginData.loginemail,
          password: loginData.loginpassword,
        }
      );
      dispatch(
        signIn({
          userDetails: { ...res.data.content },
        })
      );
      const user = res.data.content;
      window.localStorage.setItem("user", JSON.stringify(user));
      navigate("/");
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        window.alert("Wrong Credentials");
      }
    }
  };

  return (
    <div className={classes.formSection}>
      <Typography textAlign="center" className={classes.formHeading}>
        Account Details
      </Typography>
      <Typography textAlign="center" className={classes.caption}>
        Add your personal info
      </Typography>
      <div className={classes.signUpOptions}>
        <div className={classes.box}>
          <img src={googleIcon} alt="google" />
          <Typography>Sign in with Google</Typography>
        </div>
        <div className={classes.box}>
          <img src={appleicon} alt="google" />
          <Typography>Sign in with Apple</Typography>
        </div>
      </div>
      <Typography textAlign="center" className={classes.caption}>
        Or with email
      </Typography>
      {!openSignIn ? (
        <form onSubmit={handleSubmit}>
          <div className={classes.names}>
            <TextField
              label="First Name"
              name="firstname"
              onChange={handleChange}
              value={formData.firstname}
              type="text"
              required
            />
            <TextField
              label="Last Name"
              onChange={handleChange}
              name="lastname"
              value={formData.lastname}
              type="text"
              required
            />
          </div>
          <TextField
            fullWidth
            label="Creator Name"
            className={classes.inputfield}
            name="creatorname"
            onChange={handleChange}
            value={formData.creatorname}
            required
          />
          <TextField
            fullWidth
            label="Email"
            className={classes.inputfield}
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
          <TextField
            fullWidth
            label="Phone Number"
            className={classes.inputfield}
            name="phoneNumber"
            onChange={handleChange}
            value={formData.phoneNumber}
            required
          />
          <TextField
            fullWidth
            label="Password"
            className={classes.inputfield}
            name="password"
            value={formData.password}
            onChange={handleChange}
            type="password"
            required
          />
          <TextField
            fullWidth
            label="Confirm Password"
            className={classes.inputfield}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            type="password"
            required
          />
          <div className={classes.checkBox}>
            <CheckBox /> I accept the <a href="#">Terms</a>
          </div>
          <Button
            variant="contained"
            fullWidth
            className={classes.submitButton}
            type="submit"
          >
            Continue
          </Button>
          <Typography textAlign="center" className={classes.caption}>
            Already have an Account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setOpenSignIn(true)}
            >
              Sign in
            </span>
          </Typography>
        </form>
      ) : (
        <form onSubmit={handleLogin}>
          <TextField
            fullWidth
            label="Email"
            className={classes.inputfield}
            value={loginData.loginemail}
            onChange={updateFieldValue}
            name="loginemail"
            required
          />
          <TextField
            fullWidth
            label="Password"
            className={classes.inputfield}
            name="loginpassword"
            value={loginData.loginpassword}
            onChange={updateFieldValue}
            type="password"
            required
          />
          <Button
            variant="contained"
            fullWidth
            className={classes.submitButton}
            type="submit"
          >
            Continue
          </Button>
          <Typography textAlign="center" className={classes.caption}>
            Dont't have an Account?{" "}
            <span
              style={{ color: "blue", cursor: "pointer" }}
              onClick={() => setOpenSignIn(false)}
            >
              Sign up
            </span>
          </Typography>
        </form>
      )}
    </div>
  );
};

export default SignUpForm;
