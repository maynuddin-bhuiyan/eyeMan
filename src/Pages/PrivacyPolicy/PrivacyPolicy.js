import React from 'react';
import { HashLink } from 'react-router-hash-link';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Link } from 'react-router-dom';
import './PrivacyPolicy.css';


const PrivacyPolicy = () => {
    return (
        <div className='PrivacyPolicy'>

            <Link className='PrivacyIcon' to='/home'>
                <ArrowBackIosNewIcon /> <span>eyeWorld</span>
            </Link>

            <div className="Privacy">
                <h1>Privacy Policy</h1>
                <strong>This Privacy Policy was last updated on December 1, 2021.</strong>
                <p>Thank you for joining eyeWorld
                    . We at eyeWorld (eyeWorld, “eye”, “World” It's eyeWorld) respect your privacy and want you to understand how we collect, use, and share data about you. This Privacy Policy covers our data collection practices and describes your rights regarding your personal data.

                    Unless we link to a different policy or state otherwise, this Privacy Policy applies when you visit or use the eyeWorld and CorpU websites, mobile applications, APIs, or related services, including CorpU Open (the “Services”). It also applies to prospective customers of our business and enterprise products.

                    By using the Services, you agree to the terms of this Privacy Policy. You shouldn't use the Services if you don't agree with this Privacy Policy or any other agreement that governs your use of the Services.</p>


            </div>


            <div className="Policy">
                <h2>Something's Policy Was</h2>

                <ul>
                    <li><HashLink to='/privacyPolicy#yourData'>How We Get Data About You</HashLink> </li>

                    <li><HashLink to='/privacyPolicy#security'>Our Security Policy</HashLink> </li>

                    <li><HashLink to='/privacyPolicy#rights'>Your Valuable Rights</HashLink> </li>

                    <li><HashLink to='/privacyPolicy#modifications'>Modifications to This Privacy Policy</HashLink> </li>

                    <li><HashLink to='/privacyPolicy#questions'> Your Valuable Questions</HashLink> </li>

                </ul>

            </div>





            <div className="Policy-Text">
                <p>We recognize the privacy interests of children and encourage parents and guardians to take an active role in their children's online activities and interests. Individuals younger than 18 years of age, but of the required age for consent to use online services where they live (for example, 13 in the US or 16 in Ireland), may not set up an account, but may have a parent or guardian open an account and help them access appropriate content. Individuals younger than the required age for consent to use online services may not use the Services. If we learn that we've collected personal data from a child under those ages, we will take reasonable steps to delete it.</p>
            </div>






            <div className="Answers">
                <div id='yourData' className="Data">
                    <h4>How We Get Data About You</h4>
                    <p>You can set your web browser to alert you about attempts to place cookies on your computer, limit the types of cookies you allow, or refuse cookies altogether. If you do, you may not be able to use some or all features of the Services, and your experience may be different or less functional. To learn more about managing Data Collection Tools, refer to Section 6.1 (Your Choices About the Use of Your Data) below.</p>
                </div>


                <div id='security' className="Data">
                    <h4>Our Security Policy</h4>
                    <p>eyeWorld takes appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal data that we collect and store. These measures vary based on the type and sensitivity of the data. Unfortunately, however, no system can be 100% secured, so we cannot guarantee that communications between you and eyeWorld, the Services, or any information provided to us in connection with the data we collect through the Services will be free from unauthorized access by third parties. Your password is an important part of our security system, and it is your responsibility to protect it. You should not share your password with any third party, and if you believe your password or account has been compromised, you should change it immediately and contact our Support Team with any concerns.</p>

                </div>


                <div id='rights' className="Data">
                    <h4>Your Valuable Rights</h4>
                    <p>You have certain rights around the use of your data, including the ability to opt out of promotional emails, cookies, and collection of your data by certain third parties. You can update or terminate your account from within our Services, and can also contact us for individual rights requests about your personal data. Parents who believe we've unintentionally collected personal data about their underage child should contact us for help deleting that information.</p>

                </div>


                <div id='modifications' className="Data">
                    <h4>Modifications to This Privacy Policy</h4>
                    <p>From time to time, we may update this Privacy Policy. If we make any material change to it, we will notify you via email, through a notification posted on the Services, or as required by applicable law. We will also include a summary of the key changes. Unless stated otherwise, modifications will become effective on the day they are posted.

                        As permitted by applicable law, if you continue to use the Services after the effective date of any change, then your access and/or use will be deemed an acceptance of (and agreement to follow and be bound by) the revised Privacy Policy. The revised Privacy Policy supersedes all previous Privacy Policies.</p>

                </div>


                <div id='questions' className="Data">
                    <h4> Your Valuable Questions</h4>
                    <p>If you have any questions, concerns, or disputes regarding our Privacy Policy, please feel free to contact our privacy team (including our Data Protection Officer) at eyeWorld@gmail.com. You can also send postal mail to us at eyeWorld, 	1216 Mirpur 01 Dhaka Bangladesh.</p>
                </div>


            </div>


            <p className='text'>When we make a material change to this policy, we'll notify users via email, in-product notice, or another mechanism required by law. Changes become effective the day they're posted. Please contact us via email or postal mail with any questions, concerns, or disputes.</p>



            <div className="helpful">
                <h5>
                    <strong>Was this article helpful?</strong>

                </h5>
                <ThumbUpAltIcon />
                <ThumbDownAltIcon />




            </div>



        </div>
    );
};

export default PrivacyPolicy;