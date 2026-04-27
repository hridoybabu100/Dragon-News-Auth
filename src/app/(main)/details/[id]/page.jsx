import LeftSiteBar from "@/components/MainHomePage/LeftSiteBar";
import RightSiteBar from "@/components/MainHomePage/RightSiteBar";




async function getCatagories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}


async function getNewsId(category_id) {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${category_id}`,
  );
  const data = await res.json();
  return data;
}

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
      <div className="bg-green-400 font-bold text-black col-span-6">
        {" "}
        <h2 className="text-3xl">Dragon News Home</h2>
       {news.data.length=== 0 ? <div className="flex justify-center items-center h-[40vh] text-5xl text-black font-bold">No News in hare</div> : <div className="p-10">
         {news.data.map((n) => (
            <div key={n.id} className="p-10 border mb-4">
              <h3>{n.title}</h3>
            </div>
          ))}
        </div>}
      </div>
      <div className="col-span-3 space-y-4">
        <RightSiteBar></RightSiteBar>
      </div>
    </div>
  );
};

export default Detailspage;
