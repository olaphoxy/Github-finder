import React from "react";
import sinner from "./assest/sinner.gif";

const Spinner = () => {
  return (
    <div className="w-100 mt-20 ">
      <img
        width={280}
        className="mx-auto text-center"
        src={sinner}
        alt="Loading"
      />
    </div>
  );
};

export default Spinner;
