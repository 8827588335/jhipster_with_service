import { IEmployee } from 'app/entities/employee/employee.model';

export interface IDepartment {
  id: number;
  departmentName?: string | null;
  employee?: Pick<IEmployee, 'id'> | null;
}

export type NewDepartment = Omit<IDepartment, 'id'> & { id: null };
