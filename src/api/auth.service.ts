import { ILogin, IRegister, IUser } from "../interfaces/UserInterface";
import instance from "./api.service";

type LoginType = {
  accessToken: string;
  user: IUser;
};

export const login = (data: ILogin): Promise<LoginType> => {
  return instance.post("login", data);
};

export const register = (data: IRegister): Promise<LoginType> => {
  return instance.post("register", data);
};