import { Link, useLoaderData, useParams } from "react-router-dom";
import Header from "../../../shared/Header/Header";
import RightNavBar from "../../../shared/Header/RightNavBar";
import { AiFillEye } from "react-icons/ai";


const ReadMore = () => {
    const {id} = useParams();
    const cards = useLoaderData();
    console.log(cards);
    const card = cards?.find(card => card._id == id)
    const {  image_url, title, details, rating, total_view } = card;
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <div className="grid grid-cols-4 mt-10">
                <div className="col-span-3 p-5 w-full h-40">
                <div className='p-2 space-y-3'>
                    <h2 className="card-title">{title}</h2>
                    <figure><img className="w-full" src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                      <p>{details}</p>
                        <div className='flex justify-between items-center mt-7'>
                            <div className='flex items-center gap-2 '>
                                <div className="rating rating-sm">
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
                                </div>
                                <p>{rating.number}</p>
                            </div>
                            <div className='flex items-center gap-2 font-medium justify-center'>
                                <AiFillEye></AiFillEye>
                                <p>{total_view}</p>
                            </div>
                        </div>
                        <div className="py-2 px-6 mt-4 bg-[#D72050] text-xl font-medium rounded-lg text-white w-fit">
                            <Link to="/">Go back to Home</Link>
                        </div>
                    </div>
                </div>
                </div>
                <RightNavBar></RightNavBar>
            </div>
        </div>
    );
};

export default ReadMore;