import PropTypes from 'prop-types';

export const Review = ({ author, content }) => {
  return (
    <>
      <h3>{author} :</h3>
      <p>{content}</p>
    </>
  );
};
Review.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
