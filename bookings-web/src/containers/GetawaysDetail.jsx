import React, { useState, useEffect } from 'react';
import PlaceDetails from '../components/places/PlaceDetails';
import { getDetails } from '../services/placesApi';

const Getaways = () => {
  const [place, setPlace] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getDetails()
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  return loading ? (
    <h2>loading....</h2>
  ) : (
    <main>
      <PlaceDetails {...place} />
    </main>
  );
};

export default Getaways;
