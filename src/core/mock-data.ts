import { v4 as uuidv4 } from 'uuid';
import { BusinessData, ServicesFormData, Specialists } from './types';

export const BUSINESS_NAME = '[Назва закладу]';

export const businessData: BusinessData[] = [
  {
    name: 'Назва Закладу #1',
    location: 'Львів, вулиця Григоровича 6',
    mapParams: { lat: 49.8358817, lng: 24.0279784, zoom: 17 },
    workHours: '9:00 - 21:00',
    photo: '',
    rating: '8.9',
    numberOfReviews: 73,
  },
  {
    name: 'Назва Закладу #2',
    location: 'Львів, вулиця Чайковського 21',
    mapParams: { lat: 49.8368579, lng: 24.0262801, zoom: 17 },
    workHours: '9:00 - 21:00',
    photo: '',
    rating: '7.8',
    numberOfReviews: 56,
  },
];

export const adverts: string[] = ['Акції %', 'Акції %'];

export const servicesFormData: ServicesFormData[] = [
  {
    id: uuidv4(),
    label: 'Стрижка',
    items: [
      {
        id: uuidv4(),
        label: 'Чоловіча стрижка',
        price: '400грн.',
        time: '1год.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка бороди та вус',
        price: '280грн.',
        time: '30хв.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка машинкою',
        price: '300грн.',
        time: '30хв.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Чоловіча стрижка + стрижка бороди',
        price: '300грн.',
        time: '1год. 30хв.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка під насадку + FADE',
        price: '250грн.',
        time: '1год.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Дитяча стрижка',
        price: '300грн.',
        time: '1год.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Стрижка вус',
        price: '60грн.',
        time: '20хв.',
        checked: false,
      },
    ],
  },
  {
    id: uuidv4(),
    label: 'Гоління',
    items: [
      {
        id: uuidv4(),
        label: 'Гоління електробритвою',
        price: '150грн.',
        time: '30хв.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Королівське гоління',
        price: '400грн.',
        time: '1год.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Гоління голови',
        price: '200грн.',
        time: '1год.',
        checked: false,
      },
      {
        id: uuidv4(),
        label: 'Королівське гоління у ТОП-майстра',
        price: '500грн.',
        time: '1год.',
        checked: false,
      },
    ],
  },
];

export const specialists: Specialists[] = [
  {
    name: 'Олександр М.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 102,
    },
    avatar:
      'https://images.yclients.com/masters/origin/1/1c/1ce7494a6d205bc_20191217153015.png',
  },
  {
    name: 'Тарас С.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 185,
    },
    avatar:
      'https://images.yclients.com/masters/sm/1/1a/1a1c61be6e84a8f_20191217153422.png',
  },
  {
    name: 'Тарас К.',
    type: 'Топ-Барбер',
    rating: {
      value: 4.5,
      numberOfReviews: 231,
    },
    avatar:
      'https://images.yclients.com/masters/sm/3/3a/3acfa99bf683a73_20180307155114.png',
  },
  {
    name: 'Іван Г.',
    type: 'Топ-Барбер',
    rating: {
      value: 5,
      numberOfReviews: 235,
    },
    avatar:
      'https://images.yclients.com/masters/sm/6/6b/6b4679d102fe0e4_20180621172745.png',
  },
  {
    name: 'Назар Х.',
    type: 'Топ-Барбер',
    rating: {
      value: 4,
      numberOfReviews: 201,
    },
    avatar:
      'https://images.yclients.com/masters/sm/3/36/369b7f11daa8485_20190401200057.png',
  },
  {
    name: 'Юрій К.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 179,
    },
    avatar:
      'https://images.yclients.com/masters/sm/2/23/23f02ee9058448d_20191017175839.png',
  },
  {
    name: 'Андрій Р.',
    type: 'Барбер',
    rating: {
      value: 4,
      numberOfReviews: 68,
    },
  },
  {
    name: 'Роман К.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 42,
    },
    avatar:
      'https://images.yclients.com/masters/sm/8/82/82e7c5c36898e51_20190611165449.png',
  },
  {
    name: 'Олег Л.',
    type: 'Барбер',
    rating: {
      value: 5,
      numberOfReviews: 64,
    },
    avatar:
      'https://images.yclients.com/masters/sm/7/77/77ef418de278f60_20181205004107.png',
  },
  {
    name: 'Влад Г.',
    type: 'Барбер',
    rating: {
      value: 4.5,
      numberOfReviews: 90,
    },
  },
  {
    name: 'Юрій Р.',
    type: 'Барбер-Стажер',
    rating: {
      value: 4,
      numberOfReviews: 14,
    },
  },
];