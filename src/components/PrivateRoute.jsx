import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading) {
        <div>
            <h1 className='text-center text-4xl text-blue-500'>Loading</h1>
        </div>
    }
    if (user) {
        return children
    }

    return <Navigate to={"/login"} state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;