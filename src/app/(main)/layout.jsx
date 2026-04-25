import Breaking from "@/components/BreakingNews/Breaking";
import HomePage from "@/components/HomePage/HomePage";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <>
      <HomePage></HomePage>
      <Breaking></Breaking>
      <Navbar></Navbar>
      {children}
    </>
  );
};

export default MainLayout;
