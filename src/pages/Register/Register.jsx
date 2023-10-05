import { Link } from "react-router-dom";
import NavBar from "../../shared/NavBar/NavBar";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";



const Register = () => {
    const {createUser} = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email')
        const password = form.get('password')
        console.log(email, password);
        createUser(email,password)
        .then(result => {
            console.log(result.user)
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
            <div className=" flex justify-center mb-20">
                <div className="hero px-16 py-4 mt-8 w-fit bg-base-200 rounded-lg">
                    <div className="hero-content ">
                        <div className="card flex-shrink-0 w-[500px] shadow-2xl bg-base-100">
                            <h2 className="text-4xl font-semibold text-center pt-5">Register your account</h2>
                            <form onSubmit={handleRegister} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Your Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Photo URL</span>
                                    </label>
                                    <input type="text" name="url" placeholder="URL" className="input input-bordered w-full" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl font-semibold">Email</span>
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
                                    <button className="btn btn-primary bg-[#403F3F] text-white">Register</button>
                                </div>
                                <p className=" font-medium text-center mt-2">Already Have An Account ? <span className="text-red-600"><Link to="/login">Please Login</Link></span></p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;