import { useEffect, useState } from "react";

const RecommendationsFroMe = () => {

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
        <div>
            <table className="lg:table md:table">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>User Name</th>
                        <th>Query Title</th>
                        <th>Product Name</th>
                        <th>Products Image</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        item.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            {
                                                item?.User_Info.thumbnail && <img src={item?.User_Info.thumbnail} alt="Avatar Tailwind CSS Component" />
                                            }
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.User_Info.name}
                                </td>
                                <td>{item.Query_Title}</td>
                                <td>{item.Product_Name}</td>
                                <td>
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            {
                                                item.Product_Image && <img src={item.Product_Image} alt="Avatar Tailwind CSS Component" />
                                            }
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default RecommendationsFroMe;