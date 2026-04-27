import Link from "next/link";

const LeftSiteBar = ({ catagories,activeId }) => {
  return (
    <div>
      <h2 className="font-bold text-3xl text-black">All Catagories</h2>

      <ul className="flex flex-col gap-5 mt-4">
        {catagories.news_category.map((catagory) => (
          <div key={catagory.id}>
            <li
              className={`${activeId === catagory.category_id && "bg-amber-300" } bg-amber-50 rounded-md p-2 text-center text-xl`}
            >
              <Link href={`/details/${catagory.category_id}`}>
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
