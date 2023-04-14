export interface IEmployee {
  id: number;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
  phoneNumber?: string | null;
}

export type NewEmployee = Omit<IEmployee, 'id'> & { id: null };
