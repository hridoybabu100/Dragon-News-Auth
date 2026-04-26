import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSiteBar = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-black">Login With</h2>
      <div className="text-center">
        <button className="btn w-full">
          <FaGoogle />
          Login with Goggle
        </button>
      </div>
      <div className="text-center">
        <button className="btn w-full">
          <FaGithub />
          Login with Github
        </button>
      </div>
    </div>
  );
};

export default RightSiteBar;
