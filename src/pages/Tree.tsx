import React from "react";
import Article from "../components/tree/Article";
import Search from "../components/tree/Search";
import TapBar from "../components/Homepage/TapBar";

function Tree() {
  return (
    <div>
      <TapBar />
      <Search />
      <Article />
    </div>
  );
}

export default Tree;
