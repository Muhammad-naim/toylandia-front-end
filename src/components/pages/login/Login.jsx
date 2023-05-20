import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../firebase/authProvider/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash, FaGithub, } from "react-icons/fa";

const Login = () => {
    const { signInwithpassword, signInWithSocials, googleProvider, githubProvider } = useContext(AuthContext)
    const navigate = useNavigate()
    const [feedbackMessage, setFeedbackMessage] = useState('')
    const [isVisible, setIsVisible] = useState(false)
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
                if (message.includes('user-not-found')) {
                    setFeedbackMessage("invalid email");
                }
                else if (message.includes('wrong-password')) {
                    setFeedbackMessage("incorrect password");
                }
            })
    }
    const handlepopupSignin = (provider) => {
        signInWithSocials(provider)
            .then(result => navigate(('/')))
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
                            <div className="relative">
                                <input type={isVisible ? 'text' : 'password'} name="password" placeholder="password" className="input input-bordered h-8" />
                                <span className="absolute top-1/4 right-2" onClick={() => setIsVisible(!isVisible)}>
                                    {
                                        isVisible ?
                                            <FaEyeSlash /> :
                                            <FaEye />
                                    }
                                </span>
                            </div>
                            <p className="label py-0 text-red-800"><small>{feedbackMessage}</small></p>
                            <label className="label pb-0">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-4">
                            <button className="btn btn-ghost btn-sm btn-outline">Login</button>
                        </div>
                        <p className="text-center"><small>new to Toylandia? <Link to={'/signup'}>register</Link></small></p>
                        <div className="flex justify-center gap-2 my-2">
                            <button className="p-1 shadow-md hover:shadow-xl rounded-full" onClick={() => handlepopupSignin(googleProvider)} ><FcGoogle className="h-6 w-6" /></button>
                            <button className="p-1 shadow-md hover:shadow-xl rounded-full" onClick={() => handlepopupSignin(githubProvider)} ><FaGithub className="h-6 w-6" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;