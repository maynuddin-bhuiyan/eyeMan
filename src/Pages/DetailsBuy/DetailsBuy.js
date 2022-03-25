import FormControlLabel from '@mui/material/FormControlLabel';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Button, Grid, TextField, Alert } from '@mui/material';
import AddCardIcon from '@mui/icons-material/AddCard';
import FormControl from '@mui/material/FormControl';
import React, { useEffect, useState } from 'react';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import { useParams } from 'react-router-dom';
import Radio from '@mui/material/Radio';
import './DetailsBuy.css';
import { Link } from 'react-router-dom';

const DetailsBuy = () => {

    const { id } = useParams();
    const [singlePage, setSinglePage] = useState([]);
    const [specialItam, setspecialItam] = useState([]);

    useEffect(() => {

        fetch('https://salty-citadel-01065.herokuapp.com/singlepage')
            .then(res => res.json())
            .then(data => {
                setSinglePage(data);
            });
    }, []);



    useEffect(() => {
        if (singlePage.length > 0) {
            const matchItam = singlePage.find(cameraDetails => cameraDetails.id == id)
            setspecialItam(matchItam);
        }

    }, [singlePage]);

    console.log(specialItam);




    const ShippingOne = () => {
        let Shippingcard = document.getElementById('Standard');
        let textMain = document.getElementById('text');

        let Shippingfild = parseInt(Shippingcard.innerText);
        let textFeild = parseInt(textMain.innerText);

        let manTotal = parseInt(textFeild + Shippingfild);






        document.getElementById('Shipping-one').innerText = Shippingfild;
        document.getElementById('sub-total').innerText = Shippingfild;

        document.getElementById('MainTotal').innerText = manTotal;

        console.log(Shippingfild);





    };

    const Extracost = () => {

        let Shippingcard = document.getElementById('Standard');
        let Extracost = document.getElementById('Extra-cost');


        let textMain = document.getElementById('text');

        let Shippinfield = parseInt(Shippingcard.innerText);
        let Extrafield = parseInt(Extracost.innerText);



        let textField = parseInt(textMain.innerText);







        let mainValue = parseInt(Shippinfield + Extrafield);

        let subTotallAll = parseInt(mainValue + textField);

        document.getElementById('Shipping-one').innerText = mainValue;
        document.getElementById('sub-total').innerText = mainValue;
        document.getElementById('MainTotal').innerText = subTotallAll;



        console.log(mainValue);





    };


    const GetDiscount = () => {

        let totalHead = document.getElementById('MainTotal');
        let infutFeild = document.getElementById('outlined-basic');
        let infotText = infutFeild.value;


        let totalFeild = parseInt(totalHead.innerText);

        if (infotText == 'stevekaku') {
            const discount = totalFeild / 20;
            totalHead.innerText = Math.round(totalFeild - discount)
        }


        console.log(totalFeild);


    }



    const HendalBuyOnclick = (e) => {


        <Alert severity="success">This is a success alert — check it out!</Alert>

        console.log('object');
    }







    return (
        <div className='BuyDetails'>
            <Link className='BackDetails' to='/home'>
                <ArrowBackIosNewIcon /><span>eyeWorld</span>
            </Link>
            <h1> Hi Man It's <AddCardIcon className='AddCardIcon' /> Checkout</h1>



            <Grid sx={{ margin: '100px' }} className='DetailsBuy' container spacing={2}>

                <Grid item xs={4} md={4}>

                    <h2>Billing Address</h2>
                    <TextField sx={{ width: '200px', margin: '10px' }} id="outlined-basic" label="First Name" variant="outlined" />
                    <TextField sx={{ width: '200px', margin: '10px' }} id="outlined-basic" label="Last Name" variant="outlined" /> <br />
                    <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Email adress" variant="outlined" /> <br />
                    <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Phone Number" variant="outlined" /> <br />
                    <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Country" variant="outlined" /> <br />
                    <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="Address" variant="outlined" /> <br />
                    <TextField sx={{ width: '350px', margin: '10px' }} id="outlined-basic" label="City" variant="outlined" /> <br /><br /><br /><br />


                    <Button variant='contained'>Update from profile</Button>

                </Grid>

                <Grid className='Shipping-main' item xs={4} md={4}>
                    <h2>Select Shipping Method</h2>
                    <FormControl>
                        <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-radio-buttons-group-label"
                            defaultValue="female"
                            name="radio-buttons-group"
                        >

                            <div onClick={
                                () => {
                                    ShippingOne();
                                }}
                                className="Shipping">
                                <FormControlLabel value="female" control={<Radio />} label="Standard Shipping Cost" /> <h5 style={{ display: 'inline' }}> $<span style={{ display: 'inline' }} id='Standard'>{specialItam.price}</span> </h5>
                            </div>

                            <div onClick={
                                () => {
                                    Extracost();
                                }} className="Extra-cost">
                                <FormControlLabel value="male" control={<Radio />} label="Delivery In One-Hour Extra Cost" />

                                <h5 style={{ display: 'inline' }}> $<span style={{ display: 'inline' }} id='Extra-cost'>10</span></h5>
                            </div>

                        </RadioGroup>
                    </FormControl>

                    <br /><br /><br />

                    <div className="PromoCode">
                        <h3 >Promo Code</h3>
                        <TextField sx={{ padding: '5px 10px' }} id="outlined-basic" label="Enter Code" variant="outlined" />

                        <Button onClick={
                            () => {
                                GetDiscount();
                            }} className='ApplyButton'>Apply</Button>
                    </div>

                </Grid>






                <Grid className='MyOrder' item xs={4} md={4}>

                    <h1>Review Order</h1>


                    <div className="main-review">

                        <form >



                            <div className="heading">
                                <h2 style={{ display: 'inline', marginRight: '10px' }}>Product</h2>

                                <div className="otm">

                                    <h3 style={{ display: 'inline', marginLeft: '50px', marginBottom: '10px' }}>OTY</h3>
                                    <h2 style={{ marginLeft: '60px', marginTop: '15px' }}>1</h2>
                                </div>

                                <div className="main-total">

                                    <h3 style={{ display: 'inline' }}>Total</h3>

                                    <h3 style={{ marginTop: '20px' }}> $<span id='Shipping-one'> {specialItam.price} </span></h3>
                                </div>



                            </div>

                            <div className="imegas">
                                <img src={specialItam.img} alt="" />
                            </div>




                            <h5 style={{ color: '#3B3B3B', fontSize: '20px', marginTop: '40px' }}>{specialItam.name}</h5>


                            <span style={{ color: '#707070', fontSize: '15px' }}>White</span> <br />
                            <span style={{ color: '#707070', fontSize: '15px' }}>1 TB</span>


                            <div className="total">

                                <div className="sub-total">
                                    <p> Sub Total  </p> <p> $<span id='sub-total'>{specialItam.price}</span> </p>
                                </div>

                                <div className="gst">
                                    <p>GST </p> <p>  $<span id='text'>05</span></p>
                                </div>

                                <div className="grand-total">
                                    <p>Grand Total </p> <p> $<span id='MainTotal'>{specialItam.price}</span></p>
                                </div>

                            </div>


                            <Button className='Button' onClick={
                                () => {
                                    HendalBuyOnclick();
                                }}  >Process Order</Button>
                        </form>

                    </div>







                </Grid>




            </Grid>














        </div>
    );
};

export default DetailsBuy;