import Header from "../../shared/Header/Header";
import LeftNavBar from "../../shared/Header/LeftNavBar";
import RightNavBar from "../../shared/Header/RightNavBar";
import NavBar from "../../shared/NavBar/NavBar";
import DragonNews from "./DragonNews/DragonNews";
import LatestNews from "./LatestNews/LatestNews";


const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <LatestNews></LatestNews>
            <NavBar></NavBar>

            <div className="mt-12 grid lg:grid-cols-4 gap-6">
                <div className="">
                    <RightNavBar></RightNavBar>
                </div>
                <div className=" col-span-2">
                    <DragonNews></DragonNews>
                </div>
                <div className="">
                    <LeftNavBar></LeftNavBar>
                </div>
            </div>
        </div>
    );
};

export default Home;