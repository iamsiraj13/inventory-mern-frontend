import React from "react";
import { Fragment } from "react";

const FullScreenLoader = () => {
  return (
    <Fragment>
      <div className={"LoadingOverlay"}>
        <div className="Line-Progress">
          <div className="indeterminate" />
        </div>
      </div>
    </Fragment>
  );
};

export default FullScreenLoader;
