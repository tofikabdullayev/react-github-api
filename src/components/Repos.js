import React from 'react';

const Repos = ({ repos, page }) => (
  <React.Fragment>
    {repos.map(repo => (
      <div className="col-sm-12" key={repo.id}>
        <div className="card mb-3">
          <div className="card-body">
            <h5>
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                {repo.name}
              </a>
            </h5>
            {page && (
              <p>
                <strong>Owner:</strong> {repo.owner.login}
              </p>
            )}
            {page && (
              <p>
                <strong>Description:</strong> {repo.description}
              </p>
            )}
          </div>
        </div>
      </div>
    ))}
  </React.Fragment>
);

export default Repos;
