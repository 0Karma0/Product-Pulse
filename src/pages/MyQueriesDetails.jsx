import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const MyQueriesDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });

    return (
        <div className="gadgetContainer mt-8">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={item.image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product_Name: {item.Product_Name}</h2>
                    <div className="text-white mb-1">
                        <p>Product_Brand: {item.Product_Brand}</p>
                        <p>Boycotting_Reason_Details: {item.Boycotting_Reason_Details}</p>
                        <p>Query_Title: {item.Query_Title}</p>
                        <div className="flex">
                            <p className="mt-3"> User name: {item.displayName}</p>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={item.photoURL} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyQueriesDetails;