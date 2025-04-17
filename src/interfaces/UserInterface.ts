
export interface IUser {
  id: number,
  fullname: string,
  email: string,
  password?: string,
  address: string,
  phone: string,
  createdAt?: string,
  role: string,
}
export default IUser;
