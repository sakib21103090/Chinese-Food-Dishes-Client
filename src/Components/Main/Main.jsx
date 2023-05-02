import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarMain from '../../Shared/NavbarMain';
import Footer from '../../Shared/Footer';



const Main = () => {
    return (
        <div>
             <NavbarMain></NavbarMain>


            
             <Outlet></Outlet>
            
        </div>
    );
};

export default Main;