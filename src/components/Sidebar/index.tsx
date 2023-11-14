import classes from "./sidebar.module.scss";
import home from "../../Assets/home.svg";
import wishlist from "../../Assets/wishlist.svg";
import submit from "../../Assets/submit.svg";
import billing from "../../Assets/billing.svg";
import affiliate from "../../Assets/affiliate.svg";
import settings from "../../Assets/settings.svg";
import faq from "../../Assets/faq.svg";
import support from "../../Assets/support.svg";
import { useLocation, useNavigate } from "react-router-dom";

const Tabs = [
  {
    id: 1,
    name: "Home",
    icon: home,
    path: "/",
  },
  {
    id: 2,
    name: "Submit Violations",
    icon: submit,
    path: "/submit",
  },
  {
    id: 3,
    name: "Whitelist",
    icon: wishlist,
    path: "/whitelist",
  },
  {
    id: 4,
    name: "Billing",
    icon: billing,
    path: "/billing",
  },
  {
    id: 5,
    name: "Affiliate Program",
    icon: affiliate,
    path: "/affiliate",
  },
  {
    id: 6,
    name: "Settings",
    icon: settings,
    path: "/settings",
  },
  {
    id: 7,
    name: "FAQ",
    icon: faq,
    path: "/faq",
  },
  {
    id: 8,
    name: "Support",
    icon: support,
    path: "/support",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const match = (path: String) => {
    const pathNameParts = location.pathname.split("/");
    const pathValue = pathNameParts[1] ? `/${pathNameParts[1]}` : "/";
    return path === pathValue;
  };

  return (
    <div className={classes.sidebar}>
      <div className={classes.tabsSection}>
        {Tabs.map((tab) => {
          const active = match(tab.path);
          return (
            <div
              className={classes.tab}
              key={tab.id}
              style={{
                backgroundColor: `${active ? "#eef6ff" : ""}`,
              }}
              onClick={() => {
                navigate(tab.path);
              }}
            >
              <img src={tab.icon} alt="tabicon" />
              <p
                style={{
                  color: `${active ? "#3e97ff" : ""}`,
                }}
              >
                {tab.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
