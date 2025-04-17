import { useContext, useEffect, useState } from 'react'
import CategoryForm from './CategoryForm';
import { ICategory } from '../../../interfaces.ts';
import { getCategory } from '../../../api/category.service';
import CategoryItem from './CategoryItem';
import CategoryModal from './CategoryModal';
import AlertContext from '../../../shared/context/AlertContext.tsx';


const CategoryList = () => {
  // State of component - Noi luu tru du lieu trong component
  const [categories, setCategories] = useState<ICategory[]>([]);
  // const [openModal, setOpenModal] = useState<boolean>(true)
  const [updateCatId, setUpdateCatId] = useState<number | null>()
  const alert = useContext(AlertContext);

  const getCategories = async () => {
    const data = await getCategory();
    setCategories(data);
  };

  const updateCategory = (id?: number) => {
    if (id) {
      setUpdateCatId(id);
    }
  };

  const closeModal = () => {
    setUpdateCatId(null);
    alert?.success("Cập nhật category thành công");
    getCategories();
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <section className='relative'>
      <h1 className="text-3xl">Categories list</h1>
      <CategoryForm onGetCategories={getCategories} />
      <div className="overflow-x-auto rounded-lg border border-gray-200">
        <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
          <thead className="ltr:text-left rtl:text-right">
            <tr>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">ID</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Name</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Date</th>
              <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Action</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200">
            {categories.map((cat) => (
              <CategoryItem
                key={cat.id}
                onUpdateCategory={() => updateCategory(cat.id)}
                onGetCategories={getCategories}
                category={cat}
              />
            ))}
          </tbody>
        </table>
      </div>
      {updateCatId && <CategoryModal id={updateCatId} onClose={closeModal} />}
    </section>
  );
};
export default CategoryList;