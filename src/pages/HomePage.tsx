import TapBar from "../components/home_page/TapBar";
import Board from "../components/home_page/Board";
import Article from "../components/home_page/Article";
import WhyUs from "../components/home_page/WhyUs";
import { useRequest } from "ahooks";
import { getHome } from "../services/home.service";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

const HomePage = () => {
  const { data: homeData, loading } = useRequest(getHome);
  return (
    <div className="bg-slate-100 w-full">
      <TapBar />
      {loading ? (
        <Loading />
      ) : homeData?.data ? (
        <>
          <Board data={homeData?.data.banner} />
          <Article data={homeData?.data.articles} />
          <WhyUs data={homeData?.data.whyUs} />
        </>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default HomePage;
