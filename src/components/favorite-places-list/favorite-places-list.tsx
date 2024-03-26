import {Place} from '../../types/Place.ts';
import FavoritePlaceCard from '../favorite-place-card/favorite-place-card.tsx';

function FavoritePlacesList({favoritePlaces}: FavoritePlacesListProps): JSX.Element {
  return (
    <div className="favorites__places">
      {favoritePlaces.map((place) => (
        <FavoritePlaceCard
          key={place.id}
          id={place.id}
          title={place.title}
          type={place.type}
          isFavorite={place.isFavorite}
          isPremium={place.isPremium}
          price={place.price}
          images={place.images}
          rating={place.rating}
        />
      ))}
    </div>
  );
}

type FavoritePlacesListProps = {
  favoritePlaces: Place[];
}

export default FavoritePlacesList;
