import React from 'react';
import "./style.css";

const Dashboard = () => {
    const [users, setUsers] = React.useState([]);
    const f = async () => {
        const res = await fetch("https://reqres.in/api/users/");
        const json = await res.json();
        setUsers(json.data);
    };
    React.useEffect(() => {
        f();
    }, []);
    return (
        <div className="container mx-auto my-8 p-8 bg-white rounded-md shadow-md">
            <h1 className="text-3xl font-semibold mb-6">Hello ReqRes users!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {users.length > 0 ? (
                    users.map((user) => (
                        <div key={user.id} className="bg-gray-100 p-6 rounded-md shadow-md">
                            <img
                                src={user.avatar}
                                alt={user.first_name}
                                className="w-20 h-20 object-cover rounded-full mx-auto mb-4"
                            />
                            <p className="text-xl font-semibold">{user.first_name}</p>
                            <p className="text-gray-600">{user.email}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading user information...</p>
                )}
            </div>
        </div>
    );
}

export default Dashboard
