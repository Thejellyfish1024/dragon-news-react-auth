import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex p-2 bg-gray-300 rounded-lg my-6">
            <button className="btn btn-secondary">Latest</button>
            <Marquee pauseOnHover={true} speed={100}>
                <Link className="mr-12"> Match Highlights: Germany vs Spain — as it happened!</Link>
                <Link className="mr-12"> Match Highlights: Barca vs Real Madrid </Link>
                <Link className="mr-12"> BD Cricket: Tamim is out of the world cup squad</Link>
            </Marquee>
        </div>
    );
};

export default LatestNews;