import React from 'react';

import icon1 from '../../../images/social/facebook.png';
import icon2 from '../../../images/social/linkedin.png';
import icon4 from '../../../images/social/twitter.png';
import logo from '../../../images/Banner/Group 1.png';
import icon3 from '../../../images/social/github.png';
import { Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {



    return (
        <div className='Footer'>


            <Grid className='Footer_Text' container spacing={2} columns={12}>

                <Grid className='Text' item xs={4} md={4}>
                    <Typography>
                    <Link className='text-alin' to="/home">
                        <img src={logo} alt="" /></Link>
                    </Typography>
                    <Typography variant="h6" >
                        <p>Most Popular Types Of CCTV Cameras Available Here</p>
                    </Typography>

                </Grid>
                <Grid className='Link' item xs={4} md={4}>
                    <Typography>

                        <h2>Quick Link </h2>

                        <ul className='UnorderLisrt'>
                            <Link className='Itam' to='supportCenter'>
                                <li>Help Center Support</li>
                            </Link>

                            <Link className='Itam' to='singlepage'>
                                    <li>Best Service</li>
                            </Link>

                            <Link className='Itam' to='privacyPolicy'>
                                    <li>Privacy Policy</li>
                            </Link>


                            <Link className='Itam' to='termsConditions'>
                                  <li>Terms &amp; Conditions</li>
                            </Link>
                            
                            
                            
                        </ul>
                    </Typography>
                </Grid>



                
                <Grid className='Contact' item xs={4} md={4}>
                    <Typography >
                        <h2>Contact Us</h2>

                       <div className="Contact-text">
                           <h6>eye-world.com</h6>
                           <h6>01908145097</h6>
                           </div>
                            
                            

                        

                            <div className="Contact-img">
                        <a href="https://www.facebook.com/freelancer.maynuddin.7" target='_blank'> <img src={icon1} alt="" /></a>

                        <a href="https://www.linkedin.com/in/maynuddin-bhuiyan-7909a5216/" target='_blank'> <img src={icon2} alt="" /></a>

                        <a href="https://github.com/uxmain" target='_blank'> <img src={icon3} alt="" /></a>

                        <a href="https://twitter.com/MaynuddinBh/" target='_blank'> <img src={icon4} alt="" /></a>

                        </div>
                    </Typography>
                </Grid>
                



            </Grid>

        </div>
    );
};

export default Footer;