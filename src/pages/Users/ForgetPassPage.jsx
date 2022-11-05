import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const Forgetpass = lazy(() => import("../../components/Users/SendOTP"));
const ForgetPassPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Forgetpass />
      </Suspense>
    </Fragment>
  );
};

export default ForgetPassPage;
