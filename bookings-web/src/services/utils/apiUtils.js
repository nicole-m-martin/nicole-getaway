export const allPlaces = (places) => {
  const responseData = places.map((place) => {
    return {
      id: place.id,
      name: place.name,
      description: place.description,
      imageThumbnail: place.image_thumbnail,
    };
  });
  return responseData;
};

export const onePlace = (place) => {
  return {
    id: place.id,
    name: place.name,
    description: place.description,
    location: place.location,
    pricePerNight: place.price_per_night,
    image: place.image,
    imageThumbnail: place.image_thumbnail,
    maxGuests: place.max_guests,
    petFriendly: place.pet_friendly,
    pool: place.pool,
    wifi: place.wifi,
  };
};
