interface IUser {
  id?: number,
  fullname: string,
  email: string,
  password?: string,
  address: string,
  phone: string,
  createdAt?: string,
}
export type { IUser };