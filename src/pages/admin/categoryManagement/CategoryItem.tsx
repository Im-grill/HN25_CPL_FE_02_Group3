import { ICategory } from "../../../interfaces.ts";
import { deleteCategory } from "../../../api/category.service";

type CategoryItemProps = {
  category: ICategory,
  onGetCategories: () => void,
  onUpdateCategory?: () => void,
}

const CategoryItem = ({ category, onGetCategories, onUpdateCategory }: CategoryItemProps) => {
  const onDeleteCategory = async (id?: number) => {
    if (id) {
      await deleteCategory(id)
      onGetCategories()
    }
  }

  return <tr>
    <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{category.id}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{category.name}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">{category.createdAt}</td>
    <td className="whitespace-nowrap px-4 py-2 text-gray-700">
      <button onClick={onUpdateCategory}
        className="group relative inline-block focus:ring-3 focus:outline-hidden">
        <span
          className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-yellow-300 transition-transform group-hover:translate-x-0 group-hover:translate-y-0"
        ></span>
        <span
          className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold tracking-widest text-black uppercase"
        >
          Edit
        </span>
      </button>
      <button
        onClick={() => onDeleteCategory(category.id)}
        className="group relative inline-block text-sm font-medium text-white focus:ring-3 focus:outline-hidden"
      >
        <span className="absolute inset-0 border border-red-600"></span>
        <span
          className="block border border-red-600 bg-red-600 px-12 py-3 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1"
        >
          Delete
        </span>
      </button>
    </td>
  </tr>
}

export default CategoryItem;
