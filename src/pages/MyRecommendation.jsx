

import { useEffect, useState } from "react";
import MyRecommendationRow from "../components/MyRecommendationRow";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";


const MyRecommendation = () => {

    const { user } = useAuth() || {};
    const [item, setItem] = useState([]);
    const [control, setControl] = useState(false);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/recommendedQueries/${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    }, [user, control]);

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${import.meta.env.VITE_API_URL}/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            setControl(!control)
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Art has been deleted.",
                                icon: "success"
                            });
                        }
                    });
            }
        })

    };


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Edit</th>
                            <th>User</th>
                            <th>Product Name</th>
                            <th>Query Title</th>
                            <th>user email</th>
                            <th>Products Image</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            item?.map(item => <MyRecommendationRow
                                key={item._id}
                                item={item}
                                handleDelete={handleDelete}
                            ></MyRecommendationRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyRecommendation;