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

  console.log(reviews);

  return (
    <ReviewsList>
      {reviews.length > 0 ? (
        reviews.map(({ author, content, id }) => {
          return (
            <li key={id}>
              <Review author={author} content={content} />
            </li>
          );
        })
      ) : (
        <p>No reviews present!</p>
      )}
    </ReviewsList>
  );
};

export default Reviews;
