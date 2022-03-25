import React from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import TermsConditionsImg from '../../images/TermsConditions/TermsConditions.jpg';
import './TermsConditions.css';

const TermsConditions = () => {
    return (
        <div className='TermsConditions'>

            <Link className='TermsIcon' to="home">

                <ArrowBackIosIcon /> <span>eyeWorld</span>
            </Link>


            <h1>coming soon in short time,  stay tuned,</h1>



            <img src={TermsConditionsImg} alt="" />
        </div>
    );
};

export default TermsConditions;