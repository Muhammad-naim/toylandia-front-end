import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";

const Login = () => {
    const { signInwithpassword, } = useContext(AuthContext)
    const navigate = useNavigate()
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        console.log(feedbackMessage);
        signInwithpassword(email, password)
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                const message = (error.message)
                // console.log(message);
                if (message.includes('invalid-email')) {
                    setFeedbackMessage("invalid email or password");
                }
                else if (message.includes('user-not-found')) {
                    setFeedbackMessage("invalid email");
                }
                else if (message.includes('wrong-password')) {
                    setFeedbackMessage("incorrect password");
                }
            })

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
                            <p className="label py-0 text-red-800"><small>{feedbackMessage}</small></p>
                            <label className="label pb-0">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                            {/* <label className="label py-0">
                           
                            </label> */}
                            
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