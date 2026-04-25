import Link from "next/link";

const LeftSiteBar = ({ catagories,active }) => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-black">All Catagories</h2>

      <ul className="flex flex-col gap-5 mt-4">
        {catagories.news_category.map((catagory) => (
          <div key={catagory.id}>
            <li className={` ${active === catagory.category_id ? "bg-red-400" : ""} bg-slate-200 rounded-md p-2 text-center text-xl`}>
                <Link href={`${catagory.category_id}`}>
              {catagory.category_name}
                </Link>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default LeftSiteBar;
