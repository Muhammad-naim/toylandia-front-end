import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../firebase/authProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
const PrivateRouteContainer = ({ children }) => {
    const { user } = useContext(AuthContext)
    const location = useLocation();

    if (user) {
        return children;
    }
    return (

        <Navigate to={'/login'}  state={{from: location}} replace></Navigate>
 
        
        )
};

PrivateRouteContainer.propTypes = {
    children: PropTypes.node //'any' if doesn't work
};
export default PrivateRouteContainer;
