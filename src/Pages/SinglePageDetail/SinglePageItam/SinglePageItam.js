import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useHistory, useNavigate } from 'react-router-dom';
import './SinglePageItam.css';

const SinglePageItam = (props) => {
    const { img, name, id, price } = props.singlePage;



    const navigate = useNavigate();





    function detailsItam(id) {
        navigate(`detailsItam/${id}`);
    }

    return (
        <Container className='images'>
            <div style={{ cursor: 'pointer' }} onClick={
                () => {
                    detailsItam(id);
                }} className='srevice'>

                <Typography className='FavoritIcon'>

                    <Button onClick={
                        () => {
                            detailsItam(id);
                        }}>
                        <ShoppingCartIcon />
                    </Button>
                </Typography>

                <Typography className='LoveIcon'>
                    <Button> <FavoriteBorderIcon /></Button>


                </Typography>

                <Typography className='LikeIcon'>
                    <Button><ThumbUpIcon /></Button>


                </Typography>



                <img src={img} alt="" />
                <div className="text-head">
                    <Typography >
                        <h4 sx={{ mb: 1.5, fontSize: "25" }} color="#000000">{name}</h4>
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: "20" }} color="#000000" >

                        <h5>${price}</h5>
                    </Typography>


                </div>
                <Typography className='Icon' >

                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarHalfIcon />
                    <StarBorderIcon />
                </Typography>

            </div>
        </Container>
    );
};

export default SinglePageItam;