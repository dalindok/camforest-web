import TapBar from "../components/Homepage/TapBar";
import Board from "../components/Homepage/Board";
import Article from "../components/Homepage/Article";
import WhyUs from "../components/Homepage/WhyUs";

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
