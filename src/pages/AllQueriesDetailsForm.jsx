
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";


const AllQueriesDetailsForm = () => {


    const { user } = useAuth() || {};
    const handleAddForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const Query_Title = form.Query_Title.value;
        const Recommendation_reason = form.Recommendation_reason.value;
        const Product_name = form.Product_name.value;
        const Product_Image = form.Product_Image.value;
        const email = user?.email;
        const displayName = user?.displayName;
        const photoURL = user?.photoURL;


        const info = { displayName, Query_Title, Recommendation_reason, email, Product_name, Product_Image, photoURL };

        fetch(`${import.meta.env.VITE_API_URL}/recommendQueries`, {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(info)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire("Your Recommendation has been added");
                }
            })
    };


    return (
        <div className='p-6 w-full  bg-white rounded-md shadow-md'>
            <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                Recommend
            </h2>

            <form onSubmit={handleAddForm}>
                <div className="gap-8 ">
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="Query_Title">
                            Query_Title
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                            type="text"
                            placeholder="Query_Title"
                            id="Query_Title"
                            name="Query_Title"
                        />

                        <label className="block mb-2 dark:text-white" htmlFor="Recommendation_reason">
                            Recommendation_reason
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                            type="text"
                            placeholder="Recommendation_reason"
                            id="Recommendation_reason"
                            name="Recommendation_reason"
                        />

                        <label
                            className="block mt-4 mb-2 dark:text-white"
                            htmlFor="Product_name"
                        >
                            Product_name
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                            type="text"
                            placeholder="Product_name"
                            id="Product_name"
                            name="Product_name"
                        />

                    </div>
                    {/* Right side */}
                    <div className="flex-1">
                        <label className="block mb-2 dark:text-white" htmlFor="Product_Image">
                            Product_Image
                        </label>
                        <input
                            className="w-full p-2 border rounded-md focus:text-[#8049ff]"
                            type="text"
                            placeholder="Product_Image"
                            id="Product_Image"
                            name="Product_Image"
                        />
                    </div>
                </div>



                <input
                    className="px-4 w-full py-2 mt-4 rounded hover:bg-[#4331ab]  bg-[#8049ff] duration-200 text-white cursor-pointer font-semibold"
                    type="submit"
                    value="Recommend"
                />
            </form>
        </div>
    );
};

export default AllQueriesDetailsForm;