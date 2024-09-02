import TapBar from "../components/home_page/TapBar";
import Search from "../components/type/Search";
import TypeOfTree from "../components/type/TypeOfTree";

function TypesPage() {
  return (
    <div className="bg-slate-100">
      <TapBar />
      <Search />
      <TypeOfTree />
    </div>
  );
}

export default TypesPage;
