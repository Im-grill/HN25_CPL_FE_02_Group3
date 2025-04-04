import axios from "axios";
import { useState, useEffect } from "react";

const OrderDetails = () => {
    const [userId, setUserId] = useState("");
    const [bookId, setBookId] = useState("");
    const [error, setError] = useState("");
    const apiUrl: string = 'http://localhost:8080/orders';

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!userId || !bookId) {
            setError("User ID and Book ID are required");
        } else {
            setError("");
            alert("Order submitted for User ID: " + userId + " and Book ID: " + bookId);
        }

        const data = {
            created_at: new Date().toISOString(),
            users: {
                id: parseInt(userId)
            },
            books: {
                id: parseInt(bookId)
            }
        };

        axios.post(apiUrl, data).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="card bg-white rounded-md shadow-md">
            <div className="card-header p-4">
                <h1 className="text-2xl font-bold">Order Edit</h1>
            </div>
            <div className="card-body p-4 border-y border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="userId">User ID:</label>
                        <input id="userId" type="text" value={userId} className="w-full p-2 border border-slate-200"
                            onChange={(e) => setUserId(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bookId">Book ID:</label>
                        <input id="bookId" type="text" value={bookId} className="w-full p-2 border border-slate-200"
                            onChange={(e) => setBookId(e.target.value)} />
                    </div>
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
                </form>
            </div>
            <div className="card-footer p-4">
                Pagination
            </div>
        </div>
    )
}
export default OrderDetails;