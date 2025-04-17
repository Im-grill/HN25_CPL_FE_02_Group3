// import { useState } from "react";
// import instance from "../../../api/api.service";

// const OrderDetails = () => {
//     const [userEmail, setUserEmail] = useState("");
//     const [bookName, setBookName] = useState("");
//     const [bookPrice, setBookPrice] = useState(0);
//     const [quantity, setQuantity] = useState(1);
//     const [status, setStatus] = useState("pending");

//     const [error, setError] = useState("");

//     const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (!userEmail || !bookName || bookPrice <= 0 || quantity <= 0) {
//             setError("All fields are required and price/quantity must be positive");
//         } else {
//             setError("");

//             const totalPrice = bookPrice * quantity;

//             const data = {
//                 created_at: new Date().toISOString(),
//                 users: {
//                     email: userEmail
//                 },
//                 books: {
//                     name: bookName,
//                     original_price: bookPrice
//                 },
//                 quantity: quantity,
//                 total_price: totalPrice,
//                 status: status
//             };

//             instance.post("/order", data).then((response) => {
//                 console.log(response);
//                 alert("Order created successfully!");
//             }).catch(err => {
//                 console.error("Error creating order:", err);
//                 setError("Failed to create order. Please try again.");
//             });
//         }
//     }

//     return (
//         <div className="card bg-white rounded-md shadow-md">
//             <div className="card-header p-4">
//                 <h1 className="text-2xl font-bold">Create New Order</h1>
//             </div>
//             <div className="card-body p-4 border-y border-gray-200">
//                 <form onSubmit={handleSubmit}>
//                     <div className="form-group mb-4">
//                         <label htmlFor="userEmail" className="block mb-1">User Email:</label>
//                         <input
//                             id="userEmail"
//                             type="email"
//                             value={userEmail}
//                             className="w-full p-2 border border-slate-200 rounded"
//                             onChange={(e) => setUserEmail(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div className="form-group mb-4">
//                         <label htmlFor="bookName" className="block mb-1">Book Name:</label>
//                         <input
//                             id="bookName"
//                             type="text"
//                             value={bookName}
//                             className="w-full p-2 border border-slate-200 rounded"
//                             onChange={(e) => setBookName(e.target.value)}
//                             required
//                         />
//                     </div>

//                     <div className="form-group mb-4">
//                         <label htmlFor="bookPrice" className="block mb-1">Book Price:</label>
//                         <input
//                             id="bookPrice"
//                             type="number"
//                             value={bookPrice}
//                             className="w-full p-2 border border-slate-200 rounded"
//                             onChange={(e) => setBookPrice(Number(e.target.value))}
//                             min="0"
//                             required
//                         />
//                     </div>

//                     <div className="form-group mb-4">
//                         <label htmlFor="quantity" className="block mb-1">Quantity:</label>
//                         <input
//                             id="quantity"
//                             type="number"
//                             value={quantity}
//                             className="w-full p-2 border border-slate-200 rounded"
//                             onChange={(e) => setQuantity(Number(e.target.value))}
//                             min="1"
//                             required
//                         />
//                     </div>

//                     <div className="form-group mb-4">
//                         <label htmlFor="status" className="block mb-1">Status:</label>
//                         <select
//                             id="status"
//                             value={status}
//                             className="w-full p-2 border border-slate-200 rounded"
//                             onChange={(e) => setStatus(e.target.value)}
//                         >
//                             <option value="pending">Pending</option>
//                             <option value="shipping">Shipping</option>
//                             <option value="completed">Completed</option>
//                         </select>
//                     </div>

//                     {error && <div className="text-red-500 mb-4">{error}</div>}

//                     <button
//                         type="submit"
//                         className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                     >
//                         Create Order
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// }

// export default OrderDetails;