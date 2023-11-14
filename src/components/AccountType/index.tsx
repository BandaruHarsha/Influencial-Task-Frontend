import classes from "./accounttype.module.scss";
import creator from "../../Assets/creator.svg";
import agency from "../../Assets/agency.svg";
import { useState } from "react";

const AccountType = () => {
  const [selectType, setSelectedType] = useState(1);
  return (
    <div className={classes.accountTypeSection}>
      <h2>Choose an account type</h2>
      <p>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        If you need more info, please visit our <a href="#">help page</a>
      </p>
      <div className={classes.types}>
        <div
          className={classes.typeBox}
          style={{
            background: `${selectType === 1 ? "#eef6ff" : ""}`,
          }}
          onClick={() => {
            setSelectedType(1);
          }}
        >
          <img src={creator} alt="creator" width="32px" height="32px" />
          <div>
            <p>Creator</p>
            <p>Sign-up as a creator</p>
          </div>
        </div>
        <div
          className={classes.typeBox}
          onClick={() => {
            setSelectedType(2);
          }}
          style={{
            background: `${selectType === 2 ? "#eef6ff" : ""}`,
          }}
        >
          <img src={agency} alt="agency" width="32px" height="32px" />
          <div>
            <p>Agency</p>
            <p>Sign-up as an agency</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountType;
