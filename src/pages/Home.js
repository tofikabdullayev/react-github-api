import React from "react";
import Search from "../components/Search";
import Card from "../components/Card";

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <div className="row">
        <div className="col-sm-4 mb-4">
          <Card name="Tofik" />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
