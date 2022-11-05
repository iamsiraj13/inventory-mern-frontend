import React from "react";
import { lazy } from "react";
import { Suspense } from "react";
import LazyLoader from "../../components/MasterLayout/LazyLoader";
const CreatePassword = lazy(() =>
  import("../../components/Users/CreatePassword")
);

const CreatePasswordPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <CreatePassword />
    </Suspense>
  );
};

export default CreatePasswordPage;
