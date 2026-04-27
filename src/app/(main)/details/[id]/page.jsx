import LeftSiteBar from "@/components/MainHomePage/LeftSiteBar";
import NewsCard from "@/components/MainHomePage/NewsCard";
import RightSiteBar from "@/components/MainHomePage/RightSiteBar";
import { getCatagories, getNewsId } from "@/lib/dataFetcht";



const Detailspage = async ({ params }) => {
  const { id } = await params;
  console.log("Params", id);

  const catagories = await getCatagories();
  const news = await getNewsId(id);

  return (
    <div className="my-12 w-[85%] mx-auto grid grid-cols-12 gap-6">
      <div className="col-span-3">
        <LeftSiteBar catagories={catagories} activeId={id}></LeftSiteBar>
      </div>
      <div className="col-span-6">
        {" "}
        <h2 className="text-3xl font-bold text-black">News By Catagories</h2>
        {news.data.length === 0 ? (
          <div className="flex justify-center items-center h-[40vh] text-5xl text-black font-bold">
            No News in hare
          </div>
        ) : (
          
          <div className="p-10">
            {news.data.map((n) => (
              <NewsCard key={n.id} news={n}></NewsCard>
             
            ))}
          </div>
        )}
      </div>
      <div className="col-span-3 space-y-4">
        <RightSiteBar></RightSiteBar>
      </div>
    </div>
  );
};

export default Detailspage;
