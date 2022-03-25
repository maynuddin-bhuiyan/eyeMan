import React from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import './SupportCenter.css';

const SupportCenter = () => {
    return (
        <div className='SupportCenter'>
            <Link className='SupportIcon' to="home">

                <ArrowBackIosIcon />  <span>eyeWorld</span>
            </Link>




            <h1>Lifetime Support Center</h1>




            <div className="Support">

                <h2>We Will Provide You Lifetime Support</h2>
                <p>One of the best things about <Link to="home">eyeWorld</Link> is that you can login to your account from virtually anywhere, whenever you want, and access your courses easily! We strongly believe that students will benefit from the limitless educational possibilities this feature presents.

                    Once you purchase a course, you'll have access for life, provided that your account is in good standing and <Link to="home">eyeWorld</Link> continues to have a license to that course.</p>
            </div>


            <div className="Questions">

                <h3><strong>Lifetime Access: Commonly Asked Questions</strong> </h3>
                <div className='answers'>Below are answers to questions we often receive regarding lifetime access.</div>

                <ul>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#complete">Will I continue to have access to the course even after I complete it?</HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#course">I bought the course on sale. Does this affect how long I have access to the course?</HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#offer">Do free courses offer lifetime access?</HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#subscription">Will I have lifetime access to subscription content? </HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#apply">What if I used an instructor coupon to purchase the course? Does lifetime access still apply?</HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#bookReader">What happens if the instructor removes the course from eyeWorld?</HashLink>
                    </li>
                    <li className="Questionscomplete">
                        <HashLink to="/supportCenter#removed">Can my courses ever be removed from eyeWorld?</HashLink>
                    </li>
                </ul>
            </div>




            <div className="Anser">

                <div id='complete' className="Ansercomplete">
                    <h2>Will I continue to have access to the course even after I complete it?</h2>

                    <p>Yes. You will continue to have access to the course after you complete it, provided that your account's in good standing, and eyeWorld continues to have a license to the course. So, if you wish to review specific content in the course after you finish it, or take it all over again, you can.</p>
                </div>

                <div id='course' className="Ansercomplete">
                    <h2>I bought the course on sale. Does this affect how long I have access to the course?</h2>
                    <p>No. Your access to a course is not affected by the price you paid for it.</p>
                </div>

                <div id='offer' className="Ansercomplete">
                    <h2>Do free courses offer lifetime access?</h2>
                    <p>Yes. Students also receive lifetime access to free courses, provided their account remains in good standing and eyeWorld continues to have a license to the course.</p>
                </div>

                <div id='subscription' className="Ansercomplete">
                    <h2>Will I have lifetime access to subscription content? </h2>
                    <p>You will have unlimited access to subscription content as long as you have an active subscription.  If you cancel your subscription, you will have access to the subscription content until the final date of your billing period, which is posted on your Subscriptions page.</p>
                </div>

                <div id='apply' className="Ansercomplete">
                    <h2>What if I used an instructor coupon to purchase the course? Does lifetime access still apply?</h2>
                    <p>Yes. Students receive lifetime access to a eyeWorld course regardless of what price they paid for it, or whether they used a coupon to enrol or not.</p>
                </div>

                <div id='bookReader' className="Ansercomplete">
                    <h2>What happens if the instructor removes the course from eyeWorld?</h2>
                    <p>We host thousands of courses on our online learning marketplace. Our marketplace model means we do not own the copyright to the content of the courses; the respective instructors own these rights. On rare occasions, instructors may remove their courses from our marketplace, or, eyeWorld may have to remove a course from the platform for policy or legal reasons. If this does happen to a course you're enrolled in, please contact us and we'll be ready to help.<br />

                        <strong>Please note:</strong>    occasionally instructors may decide to unpublish their course and close it to additional enrollments. For example, an instructor might unpublish an older course until they"ve had a chance to update the course content. In situations where an instructor unpublishes their course, however, the course content remains on the platform and is still accessible to students who are enrolled in the course.</p>
                </div>

                <div id='removed' className="Ansercomplete">
                    <h2>Can my courses ever be removed from eyeWorld?</h2>
                    <p>On rare occasions, eyeWorld may be required to remove a course from the platform due to policy or legal reasons. If this does happen to a course you're enrolled in, please contact us and we'll be ready to help.</p>
                </div>


            </div>


            <p>Updated 12 hours ago</p>

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

export default SupportCenter;