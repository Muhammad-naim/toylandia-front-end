import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";

const Signup = () => {
    const { createUser, updateUserInfo, } = useContext(AuthContext)
    
    const handleSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value
        const email = form.email.value
        const photo = form.photoURL.value
        const password = form.password.value
        const confirm = form.confirm.value
        if (password === confirm) {
            createUser(email, password)
                .then(() => {
                    updateUserInfo(name, photo)
                        .then(result => {
                        console.log(result);
                        })
                        .catch(error=>console.log(error.message))
                })
                .catch(error=>console.log(error.message))
        }
    }
    return (
        <div>
            <div className="hero font-tl-font">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold font-heading">signup</h1>
                        </div>
                        <form onSubmit={handleSignUp} className="card-body px-4 gap-0 py-3">
                            <div className="flex gap-2 justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="name" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" name="photoURL" placeholder="photo URL" className="input input-bordered h-8" />
                                </div>
                            </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="text" name="email" placeholder="email" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" name="password" placeholder="password" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Confirm password</span>
                                    </label>
                                    <input type="text" name="confirm" placeholder="confirm password" className="input input-bordered h-8" />
                                </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-4">
                                <button className="btn btn-ghost btn-sm btn-outline">Signup</button>
                            </div>
                            <p className="text-center my-2"><small>Already have an account? <Link to={'/login'}>login</Link></small></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;