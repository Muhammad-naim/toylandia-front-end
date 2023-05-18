import { Link } from "react-router-dom";

const Signup = () => {
    return (
        <div>
            <div className="hero bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full  shadow-2xl bg-base-100">
                        <div className="text-center ">
                            <h1 className="text-4xl font-bold">signup</h1>
                        </div>
                        <form className="card-body px-4 gap-0 py-3">
                            <div className="flex gap-2 justify-center">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Name</span>
                                    </label>
                                    <input type="text" placeholder="name" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Photo</span>
                                    </label>
                                    <input type="text" placeholder="photo URL" className="input input-bordered h-8" />
                                </div>
                            </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered h-8" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text ">Confirm password</span>
                                    </label>
                                    <input type="text" placeholder="confirm password" className="input input-bordered h-8" />
                                </div>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            <div className="form-control mt-4">
                                <button className="btn btn-primary">Login</button>
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