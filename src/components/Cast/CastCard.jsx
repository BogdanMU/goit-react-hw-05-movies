import { CastItem } from './CastCard.styled';
import PropTypes from 'prop-types';

export const CastCard = ({ id, name, character, photo }) => {
  let imageUrl = `https://image.tmdb.org/t/p/w200/${photo}`;
  if (photo === null) {
    imageUrl =
      'https://hips.hearstapps.com/hmg-prod/images/legacy-fre-image-placeholder-1642515930.png?crop=0.667xw:1.00xh;0.167xw,0&resize=200:*';
  }
  return (
    <CastItem key={id}>
      <img src={imageUrl} alt={name} />
      <p>{name}</p>
      <p>{character}</p>
    </CastItem>
  );
};

CastCard.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
};
