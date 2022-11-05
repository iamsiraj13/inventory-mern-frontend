import React, { Fragment } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import CreatePasswordPage from "./pages/Users/CreatePasswordPage";
import LoginPage from "./pages/Users/LoginPage";
import RegistrationPage from "./pages/Users/RegistrationPage";
import SendOTPPage from "./pages/Users/SendOTPPage";
import VerifyOTPPage from "./pages/Users/VerifyOTPPage";

const App = () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/Login" replace />} />
          <Route exact path="/Login" element={<LoginPage />} />
          <Route exact path="/Registration" element={<RegistrationPage />} />
          <Route exact path="/SendOTP" element={<SendOTPPage />} />
          <Route exact path="/VerifyOTP" element={<VerifyOTPPage />} />
          <Route
            exact
            path="/CreatePassword"
            element={<CreatePasswordPage />}
          />
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};

export default App;
