import { findIndex } from 'lodash';
import {
  ServiceItem,
  ServicesFormData,
  Specialists,
  Timeslot,
} from '../core/types';

export const setServiceItemChecked = (
  services: ServicesFormData[],
  parentId: string,
  serviceItemId: string
): ServicesFormData[] => {
  return services.map(service => {
    if (service.id === parentId) {
      const serviceItemIndex = findIndex(service.items, { id: serviceItemId });
      return {
        ...service,
        items: [
          ...service.items.slice(0, serviceItemIndex),
          {
            ...service.items[serviceItemIndex],
            checked: !service.items[serviceItemIndex].checked,
          },
          ...service.items.slice(serviceItemIndex + 1),
        ],
      };
    }
    return service;
  });
};

export const setSpecialistSelected = (
  specialists: Specialists[],
  id: string
): Specialists[] => {
  return specialists.map(specialist =>
    specialist.id === id
      ? { ...specialist, selected: true }
      : { ...specialist, selected: false }
  );
};

export const setTimeslotSelected = (
  timeSlots: Timeslot[],
  id: string
): Timeslot[] => {
  return timeSlots.map(timeSlot =>
    timeSlot.id === id
      ? { ...timeSlot, selected: true }
      : { ...timeSlot, selected: false }
  );
};

export const unselectTimeslot = (timeSlots: Timeslot[]): Timeslot[] => {
  return timeSlots.map(timeslot =>
    timeslot.selected ? { ...timeslot, selected: false } : timeslot
  );
};

export const servicesSearch = (
  services: ServicesFormData[],
  searchCriteria: string
): ServicesFormData[] => {
  return services.map(service => ({
    ...service,
    items: service.items.filter(
      item =>
        item.label
          .toLocaleLowerCase()
          .indexOf(searchCriteria.toLocaleLowerCase()) !== -1
    ),
  }));
};

export const countSelectedServicesTotalPrice = (
  selectedServices: ServiceItem[]
): number => {
  return selectedServices.reduce((a, b) => a + b.price, 0);
};

export const countSelectedServicesTotalTime = (
  selectedServices: ServiceItem[]
): number => {
  return selectedServices.reduce((a, b) => a + b.time, 0);
};

export const formatTime = (time: number) => {
  if (time / 60 < 1) {
    return `${time}хв.`;
  }

  if (time % 60 === 0) {
    return `${time / 60}год.`;
  }

  return `${Math.floor(time / 60)}год. ${time -
    Math.floor(time / 60) * 60}хв.`;
};
