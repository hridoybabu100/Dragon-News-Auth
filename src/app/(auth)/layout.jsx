import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const AuthenticationLayout = ({ children }) => {
  return (
    <>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default AuthenticationLayout;
