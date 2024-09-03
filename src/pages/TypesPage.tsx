import { useRequest } from "ahooks";
import TapBar from "../components/home_page/TapBar";
import Search from "../components/type/Search";
import TypeOfTree from "../components/type/TypeOfTree";
import { getBanner } from "../services/banner.service";
import { getCategories } from "../services/categories.service";
import Loading from "../components/Loading";
import NoData from "../components/NoData";

function TypesPage() {
  const { data: bannerData, loading: loadingBanner } = useRequest(getBanner);
  const { data: categoriesData, loading: loadingCategories } =
    useRequest(getCategories);
  return (
    <div className="bg-slate-100">
      <TapBar />
      {loadingBanner || loadingCategories ? (
        <Loading />
      ) : (
        <div>
          {bannerData?.data && <Search data={bannerData.data} />}
          {categoriesData?.data ? (
            <TypeOfTree data={categoriesData.data} />
          ) : (
            <NoData />
          )}
        </div>
      )}
    </div>
  );
}

export default TypesPage;
