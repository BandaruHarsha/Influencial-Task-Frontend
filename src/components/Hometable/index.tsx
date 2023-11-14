import {
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import classes from "./hometable.module.scss";
import AccountCircle from "@mui/icons-material/AccountCircle";
import exportIcon from "../../Assets/export.svg";
import { useState } from "react";
import TableComponent from "../TableComponent";

const DropDownOptions = [
  "Today",
  "YesterDay",
  "This Week",
  "This Months",
  "Select date",
];

const HomeTable = () => {
  const [sortOption, setSortOption] = useState("Today");
  const [status, setStatus] = useState("Status");

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value);
  };

  return (
    <div className={classes.tableSection}>
      <div className={classes.tableHeader}>
        <TextField
          type="text"
          className={classes.searchField}
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
        <div className={classes.rightSection}>
          <div className={classes.export}>
            <img src={exportIcon} alt="export" />
            <p>Export</p>
          </div>
          <Select
            onChange={handleChange}
            value={sortOption}
            labelId="demo-select-small-label"
            sx={{
              width: "120px",
            }}
          >
            {DropDownOptions.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          <Select
            value={status}
            onChange={handleStatusChange}
            labelId="demo-select-small-label"
            sx={{
              width: "120px",
            }}
            placeholder="Status"
          >
            <MenuItem value="Status">Status</MenuItem>
          </Select>
        </div>
      </div>
      <TableComponent />
    </div>
  );
};

export default HomeTable;
