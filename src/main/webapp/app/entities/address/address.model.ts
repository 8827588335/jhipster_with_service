import { IEmployee } from 'app/entities/employee/employee.model';

export interface IAddress {
  id: number;
  streetAddress?: string | null;
  postalCode?: string | null;
  city?: string | null;
  employee?: Pick<IEmployee, 'id'> | null;
}

export type NewAddress = Omit<IAddress, 'id'> & { id: null };
