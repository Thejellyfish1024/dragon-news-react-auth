import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdOutlineDateRange } from 'react-icons/md';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'


const RightNavBar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div className="pr-10">
            <h2 className="text-2xl font-semibold">All Category</h2>
            <div className="text-center mt-5 space-y-2">
                {
                    categories.map(category => <NavLink to="/" className={`block text-[#9F9F9F] text-xl font-medium hover:bg-slate-400 hover:text-white py-2 rounded-md `} key={category.id}>{category.name}</NavLink>)
                }
            </div>
            <div className="mt-10 space-y-6">
                <div className="space-y-4">
                    <img src={img1} alt="" />
                    <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex gap-10">
                        <p className="font-medium">Sports</p>
                        <div className="text-[#9F9F9F] font-medium flex items-center gap-3">
                            <MdOutlineDateRange></MdOutlineDateRange>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={img2} alt="" />
                    <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex gap-10">
                        <p className="font-medium">Sports</p>
                        <div className="text-[#9F9F9F] font-medium flex items-center gap-3">
                            <MdOutlineDateRange></MdOutlineDateRange>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
                <div className="space-y-4">
                    <img src={img3} alt="" />
                    <p className="text-xl font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className="flex gap-10">
                        <p className="font-medium">Sports</p>
                        <div className="text-[#9F9F9F] font-medium flex items-center gap-3">
                            <MdOutlineDateRange></MdOutlineDateRange>
                            <span>Jan 4, 2022</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightNavBar;