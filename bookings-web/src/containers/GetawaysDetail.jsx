import React, { useState, useEffect } from 'react';
import PlaceDetails from '../components/places/PlaceDetails';
import { getDetails } from '../services/placesApi';
// import { useParams } from 'react-router-dom';

const GetawaysDetail = (props) => {
  const [place, setPlace] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // const { id } = useParams();

  useEffect(() => {
    getDetails(props.match.params.id)
      .then(setPlace)
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

export default GetawaysDetail;
