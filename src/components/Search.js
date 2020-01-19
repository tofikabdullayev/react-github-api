import React, { useContext, useState } from 'react';
import { AlertContext } from '../context/alert/alertContext';
import { GithubContext } from '../context/github/githubContext';

const Search = ({ page }) => {
  const alert = useContext(AlertContext);
  const github = useContext(GithubContext);
  const [value, setValue] = useState('');
  const onSubmit = event => {
    if (event.key !== 'Enter') {
      return;
    }

    if (value.trim()) {
      if (page === 'users') {
        github.search(value.trim());
      } else {
        github.searchRepos(value.trim());
      }

      alert.hide();
    } else {
      alert.show('Enter a username!');
    }
  };

  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder={page === 'users' ? 'Search by user name' : 'Search by repository name'}
        value={value}
        onChange={event => setValue(event.target.value)}
        onKeyPress={onSubmit}
      />
    </div>
  );
};

export default Search;
