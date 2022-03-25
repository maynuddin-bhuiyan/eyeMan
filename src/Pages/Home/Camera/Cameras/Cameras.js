import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import useData from '../../../../useData/useData';

import Camera from '../Camera/Camera';
import './Cameras.css';

const Cameras = () => {

    const [cameras] = useData([])
    return (
        <Container sx={{ m: 'auto' }}>
            <h1>We Offer The Best Service</h1>

            <div className="Cameras">

                {
                    cameras.map(cameras => <Camera

                        key={cameras._id}
                        cameras={cameras}

                    />)
                }
            </div>


            <div className="see-more">
                <Link className='see-text' to='/singlepage'>
                    <h5>See More </h5>
                </Link>
            </div>
        </Container>
    );
};

export default Cameras;