import React, { useState, useEffect } from 'react';
import PlaceDetails from '../components/places/PlaceDetails';
import { getDetails } from '../services/placesApi';
import { useParams } from 'react-router-dom';

const Getaways = () => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    getDetails(id)
      .then((place) => setPlace(place))
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2>loading....</h2>
  ) : (
    <main>
      <PlaceDetails place={...place} />
    </main>
  );
};

export default Getaways;
