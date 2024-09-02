import React from "react";
import Article from "../components/tree/Article";
import Search from "../components/tree/Search";
import TapBar from "../components/home_page/TapBar";

function TreePage() {
  return (
    <div>
      <TapBar />
      <Search />
      <Article />
    </div>
  );
}

export default TreePage;
