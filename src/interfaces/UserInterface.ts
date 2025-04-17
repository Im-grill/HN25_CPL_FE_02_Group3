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

export interface ILogin {
  email: string,
  password: string,
}

export interface IRegister {
  fullname: string,
  email: string,
  password: string,
  role: string,
}

export default IUser;