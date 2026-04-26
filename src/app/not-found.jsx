import Link from "next/link";
import React from "react";

const NotFoundPages = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center space-y-5 bg-amber-100 p-20 rounded-xl">
        <h2 className="text-6xl text-black font-bold">Not Found Page</h2>
        <Link href={"/"}>
          <button className="btn bg-pink-500 hover:bg-white hover:text-black text-white">Go Back</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPages;
