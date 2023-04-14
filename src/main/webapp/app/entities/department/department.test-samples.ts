import { IDepartment, NewDepartment } from './department.model';

export const sampleWithRequiredData: IDepartment = {
  id: 39095,
};

export const sampleWithPartialData: IDepartment = {
  id: 29452,
  departmentName: 'Michigan hack Incredible',
};

export const sampleWithFullData: IDepartment = {
  id: 1384,
  departmentName: 'deposit',
};

export const sampleWithNewData: NewDepartment = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
