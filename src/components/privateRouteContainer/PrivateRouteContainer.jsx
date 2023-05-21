import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from '../../firebase/authProvider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const PrivateRouteContainer = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();
    // const navigate = useNavigate()
    if (loading) {
        return (
            <div className='text-center my-8'>
                <progress className="progress w-56"></progress>
            </div>
        )
    }
    const notify = () => toast('🦄 Wow so easy!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    if (user) {
        return children;
    }

    else {
        notify()
        setTimeout(() => {
        //    return <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
        //   return  navigate('/login', {state={{ from: location }}, replace})
        }, 1500);
        return (
            <>
                <ToastContainer />
                <Navigate to={'/login'} state={{ from: location }} replace></Navigate>
            </>
        )
    }

};

PrivateRouteContainer.propTypes = {
    children: PropTypes.node //'any' if doesn't work
};
export default PrivateRouteContainer;
