import { Box, Typography } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails: React.FC = () => {
    const { productId } = useParams();

  return (
    <>
        <Box
        sx={{
          width: "100vw",
          minHeight: "100vh",
          padding: "2rem",
        }}
      >
          <Typography sx={{
              paddingTop: '5rem'
          }}>
              Showing product details for product with id of <span>{productId}</span>
          </Typography>
      </Box>
    </>
  );
}

export default ProductDetails;