import { useForm, SubmitHandler } from 'react-hook-form';
import { useContext, useEffect, useState } from 'react';
import { getOrders } from '../../../api/order.service';
import AlertContext from '../../../shared/context/AlertContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IOrder } from '../../../interfaces';

type Inputs = {
    searchKey: string;
}

type OrderFormProps = {
    onGetOrders: (filteredOrders?: IOrder[]) => void
}

const OrderForm = ({ onGetOrders }: OrderFormProps) => {
    const alert = useContext(AlertContext);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [debouncedTerm, setDebouncedTerm] = useState<string>('');
    const [, setOrders] = useState<IOrder[]>([]);

    const getListOrders = async () => {
        const data = await getOrders();
        setOrders(data);
    }

    useEffect(() => {
        getListOrders();
    }, []);

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>();

    // debounce function to delay search
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebouncedTerm(searchTerm);
        }, 500);
        return () => clearTimeout(timer);
    }, [searchTerm]);

    // effect to search when debounced term changes
    useEffect(() => {
        if (debouncedTerm !== undefined) {
            searchForOrders(debouncedTerm);
        }
    }, [debouncedTerm]);

    const searchForOrders = async (term: string) => {
        try {
            // get all orders
            const allOrders = await getOrders();

            // filter orders on search term - looking in user email, book name, and status
            const filteredOrders = term
                ? allOrders.filter((order: IOrder) =>
                    order.users.email.toLowerCase().includes(term.toLowerCase()) ||
                    order.books.name?.toLowerCase().includes(term.toLowerCase()) ||
                    order.status.toLowerCase().includes(term.toLowerCase())
                )
                : allOrders;

            // update parent component with filtered result
            onGetOrders(filteredOrders);

            // show message if no results
            if (term && filteredOrders.length === 0) {
                alert?.error("No matching orders found", 3);
            }
        } catch (error) {
            console.error("Error searching orders:", error);
            alert?.error("Encountered error while searching. Please try again later.", 3);
        }
    }

    // submit form handler
    const submitForm: SubmitHandler<Inputs> = async (data) => {
        const { searchKey } = data;
        setSearchTerm(searchKey);
    };

    // handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className="">
            <form onSubmit={handleSubmit(submitForm)} className="flex gap-1 mb-3">
                <div className="relative flex-grow">
                    <input
                        {...register("searchKey")}
                        type="text"
                        className="w-full rounded-lg border-[#c2c2c2] border-1 px-5 py-1.5 text-sm shadow-xs"
                        placeholder="Search by email, book name or status"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="flex items-center justify-between">
                    <button
                        title="search"
                        type="submit"
                        className="inline-block rounded-lg bg-blue-500 px-5 py-1.5 text-sm font-medium text-white hover:bg-blue-600 cursor-pointer"
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#fff" }} />
                    </button>
                </div>
            </form>
        </div>
    );
}

export default OrderForm;