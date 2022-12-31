import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { Review } from './Review';
import { ReviewsList } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieReviews(movieId).then(review => setReviews(review));
  }, [movieId]);

  return (
    <ReviewsList>
      {reviews.map(({ author, content, id }) => {
        return (
          <li key={id}>
            <Review author={author} content={content} />
          </li>
        );
      })}
    </ReviewsList>
  );
};

export default Reviews;
