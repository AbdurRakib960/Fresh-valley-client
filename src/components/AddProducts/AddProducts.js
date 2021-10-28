import React, { useRef, useState } from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { BsCloudUpload } from "react-icons/bs";
import './AddProducts.css';
import Typography from '@mui/material/Typography';
const axios = require('axios');

const AddProducts = () => {
    const [liveImageLink, setLiveImageLink] = useState();
    const [error, setError] = useState('');
    const nameRef = useRef();
    const weightRef = useRef();
    const priceRef = useRef();




    const uploadImage = (e) => {
        const imageData = new FormData();
        imageData.set('key', '5dcad1afdb14712ad92594f1ccaeb571')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData
        )
            .then(function (response) {
                setLiveImageLink(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
                setError(error.message)
            });

    }
    const handleSave = () => {
        const productInformation = {
            name: nameRef.current.value,
            quantity: 0,
            weight: weightRef.current.value,
            price: priceRef.current.value,
            img: liveImageLink
        }
        // const url = 'http://localhost:5500/addProduct';

        fetch('http://localhost:5500/addProduct', {
            method: 'POST',
            body: JSON.stringify(productInformation),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })
    }
    return (
        <>
            <Typography variant="h5" gutterBottom component="div">
                Add product
            </Typography>
            <div className="add-product-wrapper">
                <Box sx={{ width: '100%' }}>
                    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                        <Grid item xs={12} sm={6} md={6}>
                            <div className="name-wrapper">
                                <label htmlFor="productName">Product Name</label>
                                <br />
                                <input type="text" name="productName" id="productName" ref={nameRef} placeholder="Enter name" />
                            </div>
                        </Grid>
                        <Grid item xs={8} sm={6} md={6}>
                            <div className="name-wrapper">
                                <label htmlFor="Weight">Weight</label>
                                <br />
                                <input type="text" name="Weight" id="Weight" ref={weightRef} placeholder="Enter weight" />
                            </div>
                        </Grid>
                        <Grid item xs={8} sm={6} md={6}>
                            <div className="name-wrapper">
                                <label htmlFor="price">Add price</label>
                                <br />
                                <input type="number" name="price" id="price" ref={priceRef} placeholder="Enter price" />
                            </div>
                        </Grid>
                        <Grid item xs={8} sm={6} md={6}>
                            <div className="name-wrapper">
                                <label htmlFor="file-input">
                                    <i className="upload"><BsCloudUpload /> <span style={{marginLeft:'1rem'}}>Upload picture</span> </i>
                                </label>


                                <input onChange={uploadImage} id="file-input" type="file" style={{ display: 'none' }} />

                            </div>
                        </Grid>
                    </Grid>
                </Box>
                {
                    error && <Typography style={{ color: 'red' }} variant="h5" gutterBottom component="div">
                        Add product
                    </Typography>
                }
            </div>
            <button onClick={handleSave} className="save-btn">Save</button>
        </>
    );
};

export default AddProducts;