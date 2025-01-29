//  @typescript-eslint/no-explicit-any
export interface RentalFormData {
  rentalDate:string ;
  email: string;
  name: string;
  phoneNumber: string;
  address: string;
  townCity: string;
  pickUpLocation: string;
  pickUpDate: string;
  pickUpTime: string;
  dropOffLocation: string;
  dropOffDate: string;
  dropOffTime: string;
  paymentMethod: 'creditCard' | 'paypal' | 'bitcoin';
  cardNumber?: string;
  expirationDate?: string;
  cardHolder?: string;
  cvc?: string;
  marketing: boolean;
  termsAccepted: boolean;
}

export interface Car {
  id: string;
  name: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
}