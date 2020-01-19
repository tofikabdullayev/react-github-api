import React, { useContext } from 'react';
import Search from '../components/Search';
import { GithubContext } from '../context/github/githubContext';
import Repos from '../components/Repos';

const Home = () => {
  const { loading, repos } = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search page="repos" />
      <div className="row">
        {loading ? (
          <p className="col-sm-12 text-center">Loading...</p>
        ) : (
          <Repos repos={repos} page="repos" />
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
