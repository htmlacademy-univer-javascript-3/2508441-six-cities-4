import {Place} from '../types/Place.ts';

const AVATAR_URL = 'https://i.pravatar.cc/128';

export const offers: Place[] = [
  {
    id: '1',
    title: 'Beautiful \u0026 luxurious apartment at great location',
    type: 'Apartment',
    price: '\u20AC120',
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
    isFavorite: false,
    isPremium: false,
    images: ['img/apartment-01.jpg'],
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
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: '\u20AC132',
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
    isFavorite: false,
    isPremium: false,
    images: ['img/apartment-02.jpg'],
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
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: '\u20AC180',
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
    isFavorite: false,
    isPremium: true,
    images: ['img/apartment-03.jpg'],
    rating: 5,
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
