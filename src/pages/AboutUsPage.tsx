import { useRequest } from "ahooks";
import Aboutus from "../components/about_us/Aboutus";
import Mission from "../components/about_us/Mission";
import Ourteam from "../components/about_us/Ourteam";
import TapBar from "../components/home_page/TapBar";
import { getAboutUs } from "../services/about_us.service";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

const AboutUsPage = () => {
  const { data: aboutusData, loading } = useRequest(getAboutUs);
  return (
    <div className="h-full w-screen bg-slate-100">
      <TapBar />
      {loading ? (
        <Loading />
      ) : aboutusData?.data ? (
        <div>
          <Aboutus data={aboutusData.data.banner} />
          <Mission data={aboutusData.data.ourMission} />
          <Ourteam data={aboutusData.data.ourTeam} />
        </div>
      ) : (
        <NoData />
      )}
    </div>
  );
};

export default AboutUsPage;
