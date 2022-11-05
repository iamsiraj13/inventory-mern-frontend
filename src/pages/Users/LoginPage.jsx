import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const Login = lazy(() => import("../../components/Users/Login"));
const LoginPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Login />
      </Suspense>
    </Fragment>
  );
};

export default LoginPage;
