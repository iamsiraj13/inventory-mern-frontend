import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const Registration = lazy(() => import("../../components/Users/Registration"));
const RegistrationPage = () => {
  return (
    <Fragment>
      <Suspense fallback={<LazyLoader />}>
        <Registration />
      </Suspense>
    </Fragment>
  );
};

export default RegistrationPage;
