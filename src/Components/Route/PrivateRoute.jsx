import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return   <div>
        <LazyLoad height={762}>
          <h5>wait Page is loading..........</h5>
        </LazyLoad>
      </div>
    }


    
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
    
};

export default PrivateRoute;