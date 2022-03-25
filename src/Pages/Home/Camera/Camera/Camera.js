import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
import './Camera.css';


const Camera = (props) => {
    const { img, name, id, price } = props.cameras;






    const navigate = useNavigate();

    function detailsItam(id) {
        navigate(`detailsItam/${id}`);
    }



    return (





        <Container sx={{ cursor: 'pointer' }} onClick={
            () => {
                detailsItam(id);
            }} className='images'>

            <div className='srevice'>
                <Typography className='FavoritIcon'>
                    <Button onClick={
                        () => {
                            detailsItam(id);
                        }}>
                        <ShoppingCartIcon />
                    </Button>

                </Typography>

                <img src={img} alt="" />

                <div className="text-head">
                    <Typography >
                        <h4 sx={{ mb: 1.5, fontSize: "25" }} color="#000000">{name}</h4>
                    </Typography>
                    <Typography sx={{ mb: 1.5, fontSize: "20" }} color="#000000" >

                        <h5> ${price}</h5>
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

export default Camera;