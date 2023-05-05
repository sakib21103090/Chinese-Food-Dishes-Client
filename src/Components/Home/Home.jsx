import React from 'react';
import banner from '../../assets/banner.png'
import Marquee from "react-fast-marquee";
import Footer from '../../Shared/Footer';
import LoadCard from '../LoadCard/LoadCard';
import Extra from '../Extra/Extra';
import { Spinner } from 'react-bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProviders';




const Home = () => {
  const {loading} = useContext(AuthContext);
  
  if(loading){
    return   <div>
    <Spinner animation="border" variant="success" />
  </div>
}
    return (
        <div>
            <div>
            <div className="position-relative">
                <img className='img-fluid w-100' src={banner} alt="" />
                <div className="position-absolute top-50 start-50 translate-middle">
                <h1 className="fw-bold text-info mb-2 text-center">All information about chef and Recipes</h1>
                <Marquee className='text-info fw-bold '>
                <h2 className="lead fw-bold text-danger">Learn how to make delicious Chinese Recipes</h2></Marquee>
                
               

        </div>
            </div>
            </div>
              
              <div>
              <LoadCard></LoadCard>
              </div>
              <div>
                <Extra></Extra>
              </div>
            <div>
               <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;