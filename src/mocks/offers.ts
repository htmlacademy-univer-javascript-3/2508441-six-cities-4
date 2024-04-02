import {Offer} from '../types/Offer.ts';

export const offers: Offer[] = [
  {
    id: '1',
    title: 'Beautiful \u0026 luxurious apartment at great location',
    type: 'Apartment',
    price: 120,
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
    previewImage: 'img/apartment-01.jpg',
    rating: 4,
  },
  {
    id: '2',
    title: 'Wood and stone place',
    type: 'Room',
    price: 80,
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
    previewImage: 'img/room.jpg',
    rating: 4,
  },
  {
    id: '3',
    title: 'Canal View Prinsengracht',
    type: 'Apartment',
    price: 132,
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
    previewImage: 'img/apartment-02.jpg',
    rating: 4,
  },
  {
    id: '4',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    price: 180,
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
    previewImage: 'img/apartment-03.jpg',
    rating: 5,
  },
];
