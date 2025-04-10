import axios from "axios";
import { useState } from "react";

const UserDetails = () => {
    const [email, setEmail] = useState("");
    
    const [error, setError] = useState("");
    const apiUrl: string = 'http://localhost:5173/admin/users';

    const handleSubmit = (event: any) => {
        event.preventDefault();
        if (!email) {
            setError("Email is required");
        } else {
            setError("");
            alert("Email submitted: " + email);
        }

        const data = { email};

        axios.post(apiUrl, data).then((response) => {
            console.log(response);
        })
    }

    return (
        <div className="card bg-white rounded-md shadow-md">
            <div className="card-header p-4">
                <h1 className="text-2xl font-bold">User Edit</h1>
            </div>
            <div className="card-body p-4 border-y border-gray-200">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email"> Email:</label>
                        <input id="email" type="text" value={email} className="w-full p-2 border border-slate-200"
                            onChange={(e) => setEmail(e.target.value)} />
                        {error && <span style={{ color: "red" }}>{error}</span>}
                    </div>
                    
                    <button type="submit">Submit</button>
                </form>
            </div>
            <div className="card-footer p-4">
                Pagination
            </div>
        </div>

    )
}
export default UserDetails;