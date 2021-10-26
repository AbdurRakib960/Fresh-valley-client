import React, { useState, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './LoadProduct.css';

const LoadProduct = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        fetch('http://localhost:5500/loadProducts')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
    }, [])
    return (
        <Grid container columnSpacing={4}>
            <Grid item container spacing={4}>
                {
                    products && products.map(product => {
                        return (
                            <Grid className="product-card" item key={product._id} xs={12} sm={6} md={4} lg={4} >
                                <img style={{ width: '100%' }} src={product.img} alt="" />
                                <Typography variant="subtitle1" gutterBottom component="div" sx={{ textAlign: 'center', fontWeight:'bold' }}>
                                    {product.name}
                                </Typography>
                                <div className="pricing">
                                    <Typography variant="h5" gutterBottom component="div">
                                        ${product.price}
                                    </Typography>
                                    <button className="buyNow">Buy now</button>
                                </div>
                            </Grid>
                        )
                    })
                }
            </Grid>
        </Grid>
    );
};

export default LoadProduct;