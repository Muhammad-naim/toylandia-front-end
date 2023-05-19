import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";

const Login = () => {
    const { user, signInwithpassword, } = useContext(AuthContext)

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        signInwithpassword(email, password)
            .then(result => console.log(result.user))
            .catch(error=>console.log(error.message))

    }
    return (
        <div className="hero font-tl-font">
            <div className="hero-content flex-col my-12">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center mt-4">
                        <h1 className="text-4xl font-bold font-heading">Login</h1>
                    </div>
                    <form onSubmit={handleLogin} className="card-body gap-0 py-3">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered h-8" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered h-8" />
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