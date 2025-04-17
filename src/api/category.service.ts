import { ICategory } from "../interfaces.ts";
import instance from "./api.service";

export const getCategory = async (): Promise<ICategory[]> => {
  return instance.get("categories")
}

export const getCategoryById = async (id: number): Promise<ICategory> => {
  return instance.get("categories/" + id)
}

export const createCategory = async (data: ICategory) => {
  const categories = await getCategory();
  const newId = categories.length > 0
  ? Math.max(...categories.map((cat) => cat.id)) + 1
  : 1;

  const newCategory = { ...data, id: newId };

  return instance.post("categories", newCategory);
}

// Update

export const updateCategory = async (id: number, data: ICategory) => {
  return instance.put("categories/" + id, data)
}

// Delete
export const deleteCategory = async (id: number) => {
  return instance.delete("categories" + `/${id}`)
}
