import React from 'react';
import { Button } from '@mui/material';

import photo1 from '../../../images/Partners/Partners1.png';
import photo2 from '../../../images/Partners/Partners2.png';
import photo3 from '../../../images/Partners/Partners3.png';
import photo4 from '../../../images/Partners/Partners4.png';
import photo5 from '../../../images/Partners/Partners5.png';
import photo6 from '../../../images/Partners/Partners6.png';



import './Partners.css';

const Partners = () => {
    return (
        <div className='Partners'>

            <div className="Partners-text">
                <h1>Partners</h1>

                <Button sx={{ marginBottom: '50px' }}> We're Working With</Button>

            </div>

            <div className="Partners-img">

                <div className="image">
                    <img src={photo1} alt="" />
                </div>
                <div className="image">
                    <img src={photo2} alt="" />
                </div>
                <div className="image">
                    <img src={photo3} alt="" />
                </div>
                <div className="image">
                    <img src={photo4} alt="" />
                </div>
                <div className="image">
                    <img src={photo5} alt="" />
                </div>
                <div className="image">
                    <img src={photo6} alt="" />
                </div>

            </div>


        </div>
    );
};

export default Partners;