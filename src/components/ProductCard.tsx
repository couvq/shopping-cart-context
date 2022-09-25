import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import React from "react";
import { ProductCardProps } from "../models/models";
import CartContext from "../contexts/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const ProductCard: React.FC<ProductCardProps> = ({
  productTitle,
  productMainImageURL,
  appSalePrice,
  productId,
}) => {
  const { addToCart } = useContext(CartContext);

  return (
    <>
      <Card
        sx={{
          maxWidth: 400
        }}
      >
        <CardMedia>
          <Link to={`product/${productId}`}>
          <img 
          src={productMainImageURL} 
          alt={productTitle} 
          width="100%" 
          style={{
            cursor: 'pointer'
          }}
          />
          </Link>
        </CardMedia>
        <CardContent>
          <Typography>{productTitle}</Typography>
          <Typography>${appSalePrice}</Typography>
          <CardActions>
            <Button 
            variant="contained" 
            fullWidth
            onClick={() => {
                addToCart(productTitle, productMainImageURL, appSalePrice, productId)
            }}
            >
              Add To Cart
            </Button>
          </CardActions>
        </CardContent>
      </Card>
    </>
  );
};

export default ProductCard;
