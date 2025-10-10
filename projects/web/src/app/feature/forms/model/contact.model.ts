import { Address, Phone } from '#forms/model';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  favoritesRanking: number | null;
  phone: Phone;
  address: Address;
}
