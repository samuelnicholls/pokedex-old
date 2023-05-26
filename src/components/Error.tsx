import React, { FunctionComponent } from "react";

const Error: FunctionComponent = () => {
  return (
    <div className="w-full z-50 flex flex-col items-center justify-center mt-12">
      <p className="text-3xl text-center text-red-800">
        Sorry for the inconvenience, please refresh and try again
      </p>
    </div>
  );
};

export default Error;
