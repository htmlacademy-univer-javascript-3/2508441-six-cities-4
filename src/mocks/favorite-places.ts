import {Place} from '../types/Place.ts';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const favoritePlaces: Place[] = [
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: '\u20AC80',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 123,
        longitude: 123,
        zoom: 1,
      }
    },
    location: {
      latitude: 123,
      longitude: 123,
      zoom: 1,
    },
    isFavorite: true,
    isPremium: false,
    images: ['img/room.jpg'],
    rating: 4,
    description: 'Test description for place',
    bedrooms: 1,
    goods: ['Test good 1', 'Test good 2'],
    host: {
      name: 'Testing Test',
      avatarUrl: `${AVATAR_URL}?rnd=${Math.random()}`,
      isPro: true,
    },
    maxAdults: 2,
  },
];
