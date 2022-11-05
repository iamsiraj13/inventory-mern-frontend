import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const SendOTP = lazy(() => import("../../components/Users/SendOTP"));
const SendOTPPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <SendOTP />
    </Suspense>
  );
};

export default SendOTPPage;
