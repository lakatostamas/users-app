export interface IUser {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  dateOfBirth: string;
  registerDate: string;
  phone: string;
  picture: string;
  location: ILocation;
}

export interface ILocation {
  street: string;
  city: string;
  state: string;
  country: string;
  timezone: string;
}

export interface IUserPreview {
  id: string;
  title: string;
  firstName: string;
  lastName: string;
  picture: string;
}
