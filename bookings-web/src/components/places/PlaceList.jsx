import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';

const PlaceList = ({ places }) => {
  return places.map((place) => <Place key={place.id} {...place} />);
};

PlaceList.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
