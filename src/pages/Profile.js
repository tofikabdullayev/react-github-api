import React from "react";

const Home = props => {
  return <h1>Profile {props.match.params.name}</h1>;
};

export default Home;
