import {useNavigate} from 'react-router-dom';
import {PlaceCardType} from '../../types/PlaceCardType.ts';

function FavoritePlaceCard({...props}: PlaceCardType): JSX.Element {
  const navigate = useNavigate();
  const handleClick = (placeId: string) => {
    navigate(`/offer/${placeId}`);
  };

  return (
    <article className="favorites__card place-card">
      <div className={props.isPremium ? 'place-card__mark' : 'visually-hidden'}>
        <span>Premium</span>
      </div>
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <img
          onClick={() => handleClick(props.id)}
          style={{cursor: 'pointer'}}
          className="place-card__image"
          src={props.images[0]}
          width={150}
          height={110}
          alt="Place image"
        />
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">{props.price}</b>
            <span className="place-card__price-text">
                        /&nbsp;night
            </span>
          </div>
          <button
            className={props.isFavorite ? 'place-card__bookmark-button place-card__bookmark-button--active button' : 'place-card__bookmark-button button'}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">{props.isFavorite ? 'In bookmarks' : 'To bookmarks'}</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${props.rating * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <div onClick={() => handleClick(props.id)} style={{cursor: 'pointer'}}>{props.title}</div>
        </h2>
        <p className="place-card__type">{props.type}</p>
      </div>
    </article>
  );
}

export default FavoritePlaceCard;
