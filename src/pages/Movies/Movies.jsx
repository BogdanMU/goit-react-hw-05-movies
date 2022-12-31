import { useEffect, useState } from 'react';

import { SearchForm } from 'components/SearchForm/SearchForm';
import { getMovies } from 'services/api';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { SearchList } from './Movies.styled';

const Movies = () => {
  const [query, setQuery] = useState(null);
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (query === null) {
      return;
    }
    getMovies(query).then(movies => setMovies(movies));
  }, [query]);

  return (
    <>
      <SearchForm setQuery={setQuery} />
      {movies.length > 0 && (
        <SearchList>
          <Link to="../.."></Link>
          {movies.map(({ id, original_title }) => {
            return (
              <li key={id}>
                <NavLink to={`/movies/${id}`} state={location}>
                  {original_title}
                </NavLink>
              </li>
            );
          })}
        </SearchList>
      )}
    </>
  );
};

export default Movies;
