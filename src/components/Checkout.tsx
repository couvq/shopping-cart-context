import { Box, Typography, Stack } from '@mui/material';
import React, { useContext } from 'react';
import CartContext from '../contexts/CartContext';
import ProductCard from './ProductCard';

const Checkout: React.FC = () => {
    const {items} = useContext(CartContext);

  return (
    <>
        <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
          <Typography
          sx={{
            paddingTop: "5rem",
          }}
          variant="h4"
        >
          Your Cart
        </Typography>

        <Stack direction="row" spacing={2} flexWrap="wrap" width="100%">
          {items.map((item: any) => (
            <ProductCard
              productTitle={item?.productTitle}
              productMainImageURL={item?.productImgUrl}
              appSalePrice={item?.productPrice}
              productId={item?.productId}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
}

export default Checkout;