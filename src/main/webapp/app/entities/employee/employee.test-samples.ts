import { IEmployee, NewEmployee } from './employee.model';

export const sampleWithRequiredData: IEmployee = {
  id: 7813,
};

export const sampleWithPartialData: IEmployee = {
  id: 68531,
  lastName: 'Hilpert',
  email: 'Tristian.Parisian@hotmail.com',
};

export const sampleWithFullData: IEmployee = {
  id: 99851,
  firstName: 'Harrison',
  lastName: 'Grant',
  email: 'Brooke.Labadie28@gmail.com',
  phoneNumber: 'e-tailers internet Ville',
};

export const sampleWithNewData: NewEmployee = {
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
