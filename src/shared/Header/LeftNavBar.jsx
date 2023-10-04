import { Link } from "react-router-dom";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'


const LeftNavBar = () => {
    return (
        <div>
            <div>
                <h2 className="text-2xl font-semibold">Login With</h2>
                <div className="mt-3 space-y-2">
                    <Link className="flex items-center gap-2 border-2 justify-center py-2 text-xl font-medium rounded-md text-blue-500">
                        <FaGoogle></FaGoogle>
                        Login with Google
                    </Link>
                    <Link className="flex items-center gap-2 border-2 justify-center py-2 text-xl font-medium rounded-md">
                        <FaGithub></FaGithub>
                        Login with Github
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold">Find Us On</h2>
                <div className="mt-3">
                    <Link className="flex items-center gap-2 border-2 py-4 text-xl font-medium rounded-md pl-4 ">
                        <FaFacebook></FaFacebook>
                        <span className="text-[#706F6F]">Facebook</span>
                    </Link>
                    <Link className="flex items-center gap-2 border-x-2 py-4 text-xl font-medium rounded-md pl-4">
                        <FaTwitter></FaTwitter>
                        <span className="text-[#706F6F]">Twitter</span>
                    </Link>
                    <Link className="flex items-center gap-2 border-2 py-4  text-xl font-medium rounded-md pl-4">
                        <FaInstagram></FaInstagram>
                        <span className="text-[#706F6F]">Instagram</span>
                    </Link>
                </div>
            </div>
            <div className="mt-10">
                <h2 className="text-2xl font-semibold">Q-Zone</h2>
                <div className="mt-3 space-y-4 bg-[#F3F3F3] w-fit p-2">
                    <img src={qZone1} alt="" />
                    <img src={qZone2} alt="" />
                    <img src={qZone3} alt="" />
                </div>
            </div>
        </div>
    );
};

export default LeftNavBar;