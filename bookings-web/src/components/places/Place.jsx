import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Place = ({ id, name, description }) => {
  return (
    <Link to={`${id}`}>
      <ul>
        <li>{name}</li>
        <li>{description}</li>
      </ul>
    </Link>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Place;
