import {Place} from './Place.ts';

export type PlaceCardType = Pick<Place, 'id' | 'title' | 'type' | 'isFavorite' | 'isPremium' | 'price' | 'images' | 'rating'>;
