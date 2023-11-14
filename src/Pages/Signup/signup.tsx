import { useState } from "react";
import AccountType from "../../components/AccountType";
import classes from "./signup.module.scss";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import SignUpForm from "../../components/SignUpForm";
import logo from "../../Assets/logo.svg";
import logotext from "../../Assets/logotext.svg";

const steps = [
  {
    id: 1,
    heading: "Account Type",
    caption: "Select your account type",
  },
  {
    id: 2,
    heading: "Personal Info",
    caption: "Setup your personal Info",
  },
  {
    id: 3,
    heading: "Verification",
    caption: "Verify your account.",
  },
  {
    id: 4,
    heading: "Creator Info",
    caption: "Setup creator details",
  },
  {
    id: 5,
    heading: "Completed",
    caption: "Your account is created",
  },
];

const Signup = () => {
  const [section, setSection] = useState(1);
  const match = (id: number) => {
    const selected = section;
    return selected === id;
  };
  return (
    <div className={classes.signupScreen}>
      <div className={classes.leftSection}>
        <div className={classes.stepperSection}>
          <img src={logo} alt="logo" />
          <img src={logotext} alt="logo" />
          <div className={classes.stepper}>
            <div className={classes.dashedLine} />
            <div>
              {steps.map((item) => {
                const active = match(item.id);
                return (
                  <div className={classes.step}>
                    <div
                      className={classes.numberBox}
                      style={{
                        background: `${active ? "#59d08f" : ""}`,
                      }}
                    >
                      {item.id}
                    </div>
                    <div className={classes.textBox}>
                      <p
                        style={{
                          opacity: `${active ? 1 : 0.7}`,
                        }}
                      >
                        {item.heading}
                      </p>
                      <p
                        style={{
                          opacity: `${active ? 1 : 0.7}`,
                        }}
                      >
                        {item.caption}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={classes.rightSection}>
        {section === 1 ? (
          <div>
            <AccountType />
            <div className={classes.continueButton}>
              <div
                onClick={() => {
                  setSection(2);
                }}
              >
                Continue
                <NavigateNextIcon />
              </div>
            </div>
          </div>
        ) : (
          <SignUpForm />
        )}
      </div>
    </div>
  );
};

export default Signup;
