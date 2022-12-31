import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCast } from 'services/api';
import { CastList } from './Cast.styled';
import { CastCard } from './CastCard';

const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieCast(movieId).then(cast => setCast(cast));
  }, [movieId]);

  if (cast === null) {
    return;
  }

  return (
    <CastList>
      {cast.map(({ id, name, character, profile_path }) => (
        <CastCard
          key={id}
          name={name}
          character={character}
          photo={profile_path}
        />
      ))}
    </CastList>
  );
};

export default Cast;
