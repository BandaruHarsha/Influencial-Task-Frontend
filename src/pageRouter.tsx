import { isEmpty } from "lodash";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Rootlayout from "./layout/rootLayout";
import Signup from "./Pages/Signup/signup";
import Home from "./Pages/Home";
import Submit from "./Pages/Submit";
import Whitelist from "./Pages/Whitelist";
import { useSelector } from "react-redux";
import LogoOnlyLayout from "./layout/logoOnlylayout";
import Billing from "./Pages/Billing";

const PageRouter = () => {
  const { user } = useSelector((state: any) => state);

  const isUser = window.localStorage.getItem("user");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Rootlayout />}>
          <Route path="" element={<Home />} />
          <Route path="submit" element={<Submit />} />
          <Route path="whitelist" element={<Whitelist />} />
          <Route path="billing" element={<Billing />} />
          <Route path="affiliate" element={<Home />} />
          <Route path="settings" element={<Home />} />
          <Route path="faq" element={<Home />} />
          <Route path="support" element={<Home />} />
        </Route>
        <Route path="/" element={<LogoOnlyLayout />}>
          <Route
            path="signup"
            element={
              !isUser || !user.isLoggedIn ? <Signup /> : <Navigate to="/" />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRouter;
