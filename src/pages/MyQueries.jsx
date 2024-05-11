import MyQueriesCard from "../components/MyQueriesCard";
import MyQueriesCarousel from "../components/MyQueriesCarousel";


const MyQueries = () => {
    return (
        <div className="py-8">
            <MyQueriesCarousel></MyQueriesCarousel>
            <MyQueriesCard></MyQueriesCard>
        </div>
    );
};

export default MyQueries;