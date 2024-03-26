import {useState} from 'react';
import PlaceCard from '../../components/place-card/place-card';
import {Place} from '../../types/Place.ts';

function OffersList({offers}: OffersListProps): JSX.Element {
  const [hoveredOffer, setHoveredOffer] = useState<Place | null>(null);

  const handleMouseEnter = (offer: Place) => {
    setHoveredOffer(offer);
  };

  const handleMouseLeave = () => {
    setHoveredOffer(null);
  };

  return (
    <section className="cities__places places">
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">312 places to stay in Amsterdam</b>
      <p>Hovered offer ID: {hoveredOffer?.id}</p>
      <form className="places__sorting" action="#" method="get">
        <span className="places__sorting-caption">Sort by</span>
        <span className="places__sorting-type" tabIndex={0}>
                Popular
          <svg className="places__sorting-arrow" width="7" height="4">
            <use xlinkHref="#icon-arrow-select"></use>
          </svg>
        </span>
        <ul className="places__options places__options--custom places__options--opened">
          <li className="places__option places__option--active" tabIndex={0}>Popular</li>
          <li className="places__option" tabIndex={0}>Price: low to high</li>
          <li className="places__option" tabIndex={0}>Price: high to low</li>
          <li className="places__option" tabIndex={0}>Top rated first</li>
        </ul>
      </form>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) => (
          <div
            key={offer.id}
            onMouseEnter={() => handleMouseEnter(offer)}
            onMouseLeave={handleMouseLeave}
          >
            <PlaceCard
              key={offer.id}
              id={offer.id}
              title={offer.title}
              type={offer.type}
              isFavorite={offer.isFavorite}
              isPremium={offer.isPremium}
              price={offer.price}
              images={offer.images}
              rating={offer.rating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

type OffersListProps = {
  offers: Place[];
}

export default OffersList;
