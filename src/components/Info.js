import React from 'react';
import { useGithubContext } from '../context/context';
import styled from 'styled-components';
import { GoRepo, GoGist } from 'react-icons/go';
import { FiUsers, FiUserPlus } from 'react-icons/fi';
import Item from './Item';

const UserInfo = () => {
  const { githubUser } = useGithubContext();
  const { public_repos, followers, following, public_gists } = githubUser;

  const items = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: 'Repos',
      color: 'pink',
      value: public_repos,
    },
    {
      id: 2,
      icon: <GoGist className="icon" />,
      label: 'Gists',
      color: 'green',
      value: public_gists,
    },
    {
      id: 3,
      icon: <FiUsers className="icon" />,
      label: 'Followers',
      color: 'purple',
      value: followers,
    },
    {
      id: 4,
      icon: <FiUserPlus className="icon" />,
      label: 'Following',
      color: 'yellow',
      value: following,
    },
  ];
  return (
    <section className="section">
      <Wrapper className="section-center">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </Wrapper>
    </section>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem 2rem;
  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  }
  .item {
    border-radius: var(--radius);
    padding: 1rem 2rem;
    background: var(--clr-white);
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 3rem;
    align-items: center;
    span {
      width: 3rem;
      height: 3rem;
      display: grid;
      place-items: center;
      border-radius: 50%;
    }
    .icon {
      font-size: 1.5rem;
    }
    h3 {
      margin-bottom: 0;
      letter-spacing: 0;
    }
    p {
      margin-bottom: 0;
      text-transform: capitalize;
    }
    .pink {
      background: #ffe0f0;
      color: #da4a91;
    }
    .green {
      background: var(--clr-primary-10);
      color: var(--clr-primary-5);
    }
    .purple {
      background: #e6e6ff;
      color: #5d55fa;
    }
    .yellow {
      background: #fffbea;
      color: #f0b429;
    }
  }
`;

export default UserInfo;
