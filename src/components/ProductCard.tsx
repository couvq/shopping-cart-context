import { Card, CardActionArea, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import React from 'react';
import { ProductCardProps } from '../models/models';

const ProductCard: React.FC<ProductCardProps> = ({
    productTitle,
    productMainImageURL,
    appSalePrice,
    productId
}) => {


  return (
    <>
        <Card
            sx={{
                maxWidth: 400
            }}
        >
            <CardMedia>
                <img src={productMainImageURL} alt={productTitle} width="100%"/>
            </CardMedia>
            <CardContent>
                <Typography>
                    {productTitle}
                </Typography>
                <Typography>
                    ${appSalePrice}
                </Typography>
                <CardActions>
                    <Button variant='contained' fullWidth>Add To Cart</Button>
                </CardActions>
            </CardContent>
        </Card>
    </>
  );
}

export default ProductCard;