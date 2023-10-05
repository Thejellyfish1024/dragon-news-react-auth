/* eslint-disable react/prop-types */
import { BsBookmark } from 'react-icons/bs';
import {  AiFillEye, AiOutlineShareAlt } from 'react-icons/ai';
import { Link } from 'react-router-dom';


const Card = ({ card }) => {
    const { author, image_url,_id, title, details, rating, total_view } = card;
    return (
        <div>
            <div className="card card-compact bg-gray-100 ">
                <div className='flex justify-between bg-gray-200 p-3 rounded-md items-center'>
                    <div className='flex items-center gap-2'>
                        <img
                            src={author.img}
                            alt="tania andrew"
                            className="relative inline-block w-10 h-10 !rounded-full object-cover object-center"
                        />
                        <div>
                            <h5 className="block font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                                {author.name}
                            </h5>
                            <p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
                                {author.published_date}
                            </p>
                        </div>
                    </div>
                    <div className="5 flex text-xl font-medium items-center gap-0">
                        <BsBookmark></BsBookmark>
                        <AiOutlineShareAlt></AiOutlineShareAlt>
                    </div>
                </div>
                {/*  */}
                <div className='p-2 space-y-3'>
                    <h2 className="card-title">{title}</h2>
                    <figure><img src={image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        {
                            details.length > 200 ? 
                            <div>
                                <p>{details.slice(0,200)} <span>....<Link to={`/card/${_id}`} className='font-medium text-red-600'>Read more</Link></span></p>
                                
                            </div>
                            :
                            <p>{details}</p>
                        }
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;