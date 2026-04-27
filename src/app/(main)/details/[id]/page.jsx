import LeftSiteBar from "@/components/MainHomePage/LeftSiteBar";
import RightSiteBar from "@/components/MainHomePage/RightSiteBar";

const Detailspage = async ({ params}) => {
  const {id} = await params;
  console.log('res id', id);

  return <div>
    <h3>Detals page</h3>
  </div>;
};

export default Detailspage;
