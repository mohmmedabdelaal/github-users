import React from 'react';
import { Info, Repos, User, Search, Navbar } from '../components';
import loadingImage from '../images/preloader.gif';
import { useGithubContext } from '../context/context';
const Dashboard = () => {
  const { isLoading } = useGithubContext();
  if (isLoading) {
    return (
      <main>
        <Navbar />
        <Search />
        <img src={loadingImage} alt="loading spinner" />
      </main>
    );
  }
  return (
    <main>
      <Navbar />
      <Search />
      <User />
      <Info />
      <Repos />
    </main>
  );
};

export default Dashboard;