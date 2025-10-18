import { Address, Phone } from '#forms/model';

export interface Contact {
  id: string;
  uid: string;
  phone: Phone;
  lastName: string;
  address: Address;
  personal: boolean;
  firstName: string;
  dateOfBirth: Date;
  favoritesRanking: number | null;
}
