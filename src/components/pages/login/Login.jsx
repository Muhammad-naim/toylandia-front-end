import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="hero h-screen">
            <div className="hero-content flex-col my-auto">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center mt-4">
                        <h1 className="text-4xl font-bold">Login</h1>
                    </div>
                    <form className="card-body gap-0 py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered h-8" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered h-8" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-primary">Login</button>
                        </div>
                        <p className="text-center"><small>new to Toylandia? <Link to={'/signup'}>register</Link></small></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;