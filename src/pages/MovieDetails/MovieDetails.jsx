import { useState, useEffect, Suspense } from 'react';
import { useParams, NavLink, Outlet, useLocation } from 'react-router-dom';
import { getMovieByID } from 'services/api';
import {
  AdditionalInfo,
  AdditionalInfoLink,
  BackLink,
  Container,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    getMovieByID(movieId).then(movie => setMovie(movie));
  }, [movieId]);
  if (movie === null) {
    return;
  }
  const { title, vote_average, poster_path, overview, genres } = movie;
  const imageUrl = 'https://image.tmdb.org/t/p/w300/';
  const genreList = genres
    .map(movie => Object.values(movie).splice(1, 2, ''))
    .join(', ');

  return (
    <>
      <BackLink to={location.state || '/'}>Back</BackLink>
      <Container>
        <img src={`${imageUrl}${poster_path}`} alt={title} />
        <div>
          <h1>{title}</h1>
          <h3>User score:</h3>
          <p>{Math.ceil(Number(vote_average).toFixed(2) * 10)} %</p>
          <h3>Owerview:</h3>
          <p> {overview}</p>
          <h3>Genres</h3>
          <p>{genreList}</p>
        </div>
      </Container>
      <AdditionalInfo>
        <h3>
          <AdditionalInfoLink to="cast">Cast</AdditionalInfoLink>
        </h3>
        <h3>
          <AdditionalInfoLink to="reviews">Reviews</AdditionalInfoLink>
        </h3>
      </AdditionalInfo>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
