import LeftSiteBar from "@/components/MainHomePage/LeftSiteBar";
import RightSiteBar from "@/components/MainHomePage/RightSiteBar";




const Detailspage = async ({ params }) => {
  const res = await params;
  console.log(res);
  
  
  return (
    <div className="my-12 w-[85%] mx-auto grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <LeftSiteBar catagories={catagories}></LeftSiteBar>
      </div>
      <div className="bg-green-400 font-bold text-black col-span-6">
        {" "}
        <h2 className="text-3xl">Dragon News Home</h2>
        <div className="p-10">
          {news.map((n) => (
            <div key={n.id} className="p-10 border mb-4">
              <h3>{n.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-3 space-y-4">
        <RightSiteBar></RightSiteBar>
      </div>
    </div>
  );
};

export default Detailspage;
