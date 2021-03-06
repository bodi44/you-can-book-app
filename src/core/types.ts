import { SocialNetworks, StepperSteps } from './enums';

export interface GoogleMapsSearchParams {
  lat: number;
  lng: number;
  zoom: number;
}

export interface BusinessData {
  name: string;
  location: string;
  mapParams: GoogleMapsSearchParams;
  workHours: string;
  photo: string;
  rating: string;
  numberOfReviews: number;
  reviewsLink: string;
}

export interface ServiceItem {
  id: string;
  label: string;
  price: number;
  time: number;
  checked: boolean;
}

export interface ServicesFormData {
  id: string;
  label: string;
  items: ServiceItem[];
}

export interface FormState {
  services: ServicesFormData[];
  specialists: Specialists[];
  selectedDate: Date;
  timeSlots: Timeslot[];
  userInfo: UserInfoFormValues;
}

export interface StepperState {
  step: StepperSteps;
}

export interface Specialists {
  id: string;
  name: string;
  type: string;
  rating: {
    value: number;
    numberOfReviews: number;
  };
  avatar?: string;
  selected: boolean;
}

export type Timeslot = {
  id: string;
  value: string;
  selected: boolean;
};

export type UserInfoFormValues = {
  name: string;
  phoneNumber: string;
  callBack: boolean;
  email: string;
  comment: string;
};

export type SocialNetwork = {
  key: SocialNetworks;
  link: string;
};
