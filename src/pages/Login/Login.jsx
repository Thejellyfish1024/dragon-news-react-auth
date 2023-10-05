import { Link, useLocation, useNavigate } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const Login = () => {

    const{signInUser} = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
        signInUser(email,password)
        .then(result => {
            console.log(result.user);
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.log(error);
        })
        
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mt-10">
                <NavBar></NavBar>
            </div>
            <div className=" flex justify-center">
                <div className="hero p-8 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content">
                        <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                            <h2 className="text-4xl font-semibold text-center pt-5">Login your account</h2>
                            <form onSubmit={handleLogin} className="card-body">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email address</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary bg-[#403F3F] text-white">Login</button>
                                </div>
                                <p className=" font-medium text-center mt-2">Do not Have An Account ? <span className="text-red-600"><Link to="/register">Register</Link></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;