import {
  MenuItem,
  Popover,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import classes from "./home.module.scss";
import { useState } from "react";
import icon1 from "../../Assets/statIcon1.svg";
import icon2 from "../../Assets/statIcon2.svg";
import icon3 from "../../Assets/statIcon3.svg";
import icon4 from "../../Assets/statIcon4.svg";
import HomeTable from "../../components/Hometable";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";

const DropDownOptions = [
  "Today",
  "Yesterday",
  "This Week",
  "This Months",
  "Select date",
];

const statCardContent = [
  {
    id: 1,
    count: 252,
    icon: icon1,
    text: "Links Scraped",
    borderColor: "var(--primary-primary, #3E97FF)",
  },
  {
    id: 2,
    count: 252,
    icon: icon2,
    text: "Links Manually Checked",
    borderColor: "var(--info-info, #7239EA)",
  },
  {
    id: 3,
    count: 252,
    icon: icon3,
    text: "Link Violations",
    borderColor: "var(--warning-warning, #F6C000)",
  },
  {
    id: 4,
    count: 252,
    icon: icon4,
    text: "Links Removed",
    borderColor: "var(--danger-danger, #F1416C)",
  },
];

const Home = () => {
  const [sortOption, setSortOption] = useState("Today");
  const [showCalender, setShowCalender] = useState(false);

  console.log(showCalender);
  console.log(sortOption);

  const handleChange = (event: SelectChangeEvent) => {
    setSortOption(event.target.value);
    if (event.target.value === "Select date") {
      setShowCalender(true);
    } else {
      setShowCalender(false);
    }
  };

  return (
    <div className={classes.homelayout}>
      <div className={classes.sortHeader}>
        <div className={classes.sort}>
          <Typography>Sort by</Typography>
          <Select
            onChange={handleChange}
            value={sortOption}
            labelId="demo-select-small-label"
            sx={{
              width: "180px",
            }}
          >
            {DropDownOptions.map((item) => (
              <MenuItem value={item}>{item}</MenuItem>
            ))}
          </Select>
          {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker />
          </LocalizationProvider> */}
          {showCalender && (
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker />
            </LocalizationProvider>
          )}
        </div>
      </div>
      <div className={classes.statsSection}>
        {statCardContent.map((item) => (
          <div
            className={classes.statCard}
            key={item.id}
            style={{
              borderBottom: `3px solid ${item.borderColor}`,
            }}
          >
            <div>
              <p>{item.count}</p>
              <img src={item.icon} width="40px" height="40px" alt="icon" />
            </div>
            <p className={classes.statCaption}>{item.text}</p>
          </div>
        ))}
      </div>
      <HomeTable />
    </div>
  );
};

export default Home;
