import { IUser } from "../interfaces/UserInterface";
import instance from "./api.service";

type LoginType = {
  accessToken: string;
  user: IUser;
};

export const login = (data: IUser): Promise<LoginType> => {
  return instance.post("login", data);
};

export const register = (data: IUser): Promise<LoginType> => {
  return instance.post("register", data);
};