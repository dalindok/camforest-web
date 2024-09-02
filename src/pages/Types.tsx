import TapBar from "../components/Homepage/TapBar";
import Search from "../components/Type/Search";
import TypeOfTree from "../components/Type/TypeOfTree";

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
