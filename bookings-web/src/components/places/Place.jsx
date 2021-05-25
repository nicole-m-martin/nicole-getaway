import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Place = ({ id, imageThumbnail, name, description }) => {
  return (
    <>
      <Link to={`/${id}`}>
        <h3>{name}</h3>
      </Link>
      <img src={imageThumbnail} alt="hotel picture" />
      <p>{description}</p>
    </>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Place;
