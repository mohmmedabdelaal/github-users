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
  const [requests, setRequests] = useState(0);
  const [error, setError] = useState({ show: false, msg: '' });

  const searchGithub = async (user) => {
    setIsLoading(true);
    const response = await axios
      .get(`${rootUrl}/users/${user}`)
      .catch((err) => console.log(err));

    setIsLoading(false);
  };
  useEffect(() => {
    searchGithub();
  }, []);

  return (
    <GithubContext.Provider value="context">{children}</GithubContext.Provider>
  );
};

export const useGithubContext = () => {
  return useContext(GithubContext);
};
