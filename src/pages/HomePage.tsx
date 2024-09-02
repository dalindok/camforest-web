import TapBar from "../components/home_page/TapBar";
import Board from "../components/home_page/Board";
import Article from "../components/home_page/Article";
import WhyUs from "../components/home_page/WhyUs";

function HomePage() {
  return (
    <div className="bg-slate-100">
      <TapBar />
      <Board />
      <Article />
      <WhyUs />
    </div>
  );
}

export default HomePage;
