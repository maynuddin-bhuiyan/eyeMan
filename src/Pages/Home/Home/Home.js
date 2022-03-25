import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Cameras from '../Camera/Cameras/Cameras';
import Features from '../Features/Features';
import Gellary from '../Gellary/Gellary';
import Partners from '../Partners/Partners';
import ReviewAll from '../Review/ReviewAll/ReviewAll';


const Home = () => {
    return (
        <div>

        <Navigation />
        <Banner />
        <Cameras />
        <Gellary />
        <Features />
        <Partners/>
        <ReviewAll />
        <Footer />
      

        </div>
    );
};

export default Home;