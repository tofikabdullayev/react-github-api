import React, { useContext } from 'react';
import Search from '../components/Search';
import Card from '../components/Card';
import { GithubContext } from '../context/github/githubContext';

const Home = () => {
  const { loading, users } = useContext(GithubContext);

  return (
    <React.Fragment>
      <Search page="users" />
      <div className="row">
        {loading ? (
          <p className="col-sm-12 text-center">Loading...</p>
        ) : (
          users.map(user => {
            return (
              <div className="col-sm-4 mb-4" key={user.id}>
                <Card user={user} />
              </div>
            );
          })
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
