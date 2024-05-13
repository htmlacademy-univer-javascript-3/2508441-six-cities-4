import {Link} from 'react-router-dom';
import FavoritePlacesList from '../../components/favorite-places-list/favorite-places-list.tsx';
import {AppRoute} from '../../const.ts';
import {FavoritePlace} from '../../types/FavoritePlace.ts';
import {Header} from '../../components/header/header.tsx';

type FavoritesPageProps = {
  favoritePlaces: FavoritePlace[];
}

function FavoritesPage({favoritePlaces}: FavoritesPageProps): JSX.Element {
  return(
    <div className="page">
      <Header />
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <FavoritePlacesList favoritePlaces={favoritePlaces}/>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <Link className="footer__logo-link" to={AppRoute.Main}>
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </Link>
      </footer>
    </div>
  );
}

export default FavoritesPage;
