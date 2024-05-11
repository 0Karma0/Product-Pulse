import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const AllQueriesDetails = () => {

    const { id } = useParams();
    const [item, setItem] = useState([]);
    // console.log(user);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/allQueries/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setItem(data);
            });
    });

    return (
        <div className="lg:flex lg:flex-col md:flex-row justify-around py-8 gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img className="w-[500px]" src={item.Product_Image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Product_Name: {item.Product_Name}</h2>
                    <div className="text-white mb-1">
                        <p>Brand_Name: {item.Brand_Name}</p>
                        <p>Date_Posted: {item.Date_Posted}</p>
                        <p>Query_Title: {item.Query_Title}</p>
                        <p>Alternation_Reason: {item.Alternation_Reason}</p>
                        <p>recommendationCount: {item.recommendationCount}</p>
                    </div>
                </div>
            </div>
            <section className='p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]'>
                <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                    Recommend
                </h2>

                <form>
                    <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                        <div>
                            <label className='text-gray-700 ' htmlFor='Title'>
                                Title
                            </label>
                            <input
                                id='Title'
                                type='text'
                                name='Title'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                defaultValue={item.Query_Title}
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='Recommendation_reason'>
                            Recommendation reason
                            </label>
                            <input
                                id='Recommendation_reason'
                                type='text'
                                name='Recommendation_reason'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>

                        <div>
                            <label className='text-gray-700 ' htmlFor='comment'>
                                Comment
                            </label>
                            <input
                                id='comment'
                                name='comment'
                                type='text'
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                            />
                        </div>
                        <div className='flex flex-col gap-2 '>
                            <label className='text-gray-700'>Deadline</label>

                            {/* Date Picker Input Field */}
                        </div>
                    </div>

                    <div className='flex justify-end mt-6'>
                        <button
                            type='submit'
                            className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
                        >
                            Recommend
                        </button>
                    </div>
                </form>
            </section>
        </div >
    );
};

export default AllQueriesDetails;