import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { getTrendingMovies } from 'services/api';
import { Title, TrendingList } from './Home.styled';

const Home = () => {
  const [trending, setTrending] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getTrendingMovies().then(movies => setTrending(movies.results));
  }, []);
  return (
    trending.length > 0 && (
      <>
        <Title>Trending today</Title>
        <TrendingList>
          {trending.map(({ id, title }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={location}>
                  {title}
                </NavLink>
              </li>
            );
          })}
        </TrendingList>
      </>
    )
  );
};
export default Home;
