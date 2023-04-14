import { IAddress, NewAddress } from './address.model';

export const sampleWithRequiredData: IAddress = {
  id: 88754,
};

export const sampleWithPartialData: IAddress = {
  id: 34483,
  streetAddress: 'wireless Fresh Court',
  postalCode: 'Factors Hill Rubber',
};

export const sampleWithFullData: IAddress = {
  id: 79781,
  streetAddress: 'interfaces Intelligent Ameliorated',
  postalCode: 'open-source Car hybrid',
  city: 'Kingsport',
};

export const sampleWithNewData: NewAddress = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
