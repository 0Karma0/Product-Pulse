import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllQueriesCard = () => {
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allQueries`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });
    return (
        <div className="gadgetContainer pt-10 grid md:grid-cols-3 gap-4 mt-8">
            {
                // eslint-disable-next-line no-unused-vars
                item?.map(p => (
                    <div key={p._id}>
                        <div className="card py-3 bg-base-100 shadow-xl">
                            <figure><img className="mb-3 h-[300px] w-[350px]" src={p.Product_Image} alt="Shoes" /></figure>
                            <div>
                                <h2 className="card-title">Name: {p.Query_Title}</h2>
                                <div className="text-white mb-1">
                                    <p>Product_Name: {p.Product_Name}</p>
                                    <p>Brand_Name: {p.Brand_Name}</p>
                                    <p>Alternation_Reason: {p.Alternation_Reason}</p>
                                    <p>Date_Posted: {p.Date_Posted}</p>
                                    <p>recommendation: {p.recommendationCount}</p>
                                    <div className="flex">
                                        <p className="mt-3">name: {p.User_Info.name}</p>
                                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                            <div className="w-10 rounded-full">
                                                <img src={p.User_Info.thumbnail} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-actions justify-between">
                                    <Link to={`/queryDetails/${p._id}`}><button className="btn btn-primary">Recommend</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default AllQueriesCard;