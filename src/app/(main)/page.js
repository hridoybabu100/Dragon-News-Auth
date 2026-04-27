import { redirect } from "next/navigation";

const homePage = ('01')
export default async function Home() {
  // const catagories = await getCatagories();
  
  // console.log(news);
  redirect(`/details/${homePage}`)

  // const news = await getNewsId('03');
  // console.log(news);
  

  // console.log('Fetch Catagories', catagories.news_category
  // );
  
}
