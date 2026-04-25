import LeftSiteBar from "@/components/MainHomePage/LeftSiteBar";
import { FaGithub, FaGoogle } from "react-icons/fa";

async function getCatagories(){
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const data = await res.json();
  return data.data;
}


export default async function Home() {

const catagories = await getCatagories();
// console.log('Fetch Catagories', catagories.news_category
// );


return (
  <div className="my-12 w-[85%] mx-auto grid grid-cols-12 gap-6">
    <div className="col-span-3">
     <LeftSiteBar catagories={catagories} ></LeftSiteBar>
    </div>
    <div className="bg-green-400 font-bold text-3xl text-black col-span-6">
      {" "}
      Dragon News Home
    </div>
    <div className="col-span-3 space-y-4">
      <h2 className="text-2xl font-bold text-black">Login With</h2>
      <div className="text-center">
        <button className="btn w-full"><FaGoogle/>Login with Goggle</button>
      </div>
      <div className="text-center">
        <button className="btn w-full"><FaGithub/>Login with Github</button>
      </div>
      
    </div>
  </div>
);
}