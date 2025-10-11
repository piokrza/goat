import { Address, Phone } from '#forms/model';

export interface Contact {
  id: string;
  uid: string;
  phone: Phone;
  lastName: string;
  address: Address;
  firstName: string;
  dateOfBirth: Date;
  favoritesRanking: number | null;
}
