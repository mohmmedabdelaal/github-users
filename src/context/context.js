import React, { useState, useEffect, useContext } from 'react';
import mockUser from './mockData.js/mockUser';
import mockRepos from './mockData.js/mockRepos';
import mockFollowers from './mockData.js/mockFollowers';
import axios from 'axios';
const rootUrl = 'https://api.github.com';

const GithubContext = React.createContext();

export const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getGithubUser = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(rootUrl);
      const data = response.data;
      setIsLoading(false);
      setGithubUser(data);
    } catch (err) {
      setError(err.message);
    }
  };
  useEffect(() => {
    getGithubUser();
  }, []);

  return (
    <GithubContext.Provider value="context">{children}</GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
