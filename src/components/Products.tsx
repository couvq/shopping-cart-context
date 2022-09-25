import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useEffect, useState } from "react";
import { getTodaysDeals } from "../utils/getTodaysDeals";
import ProductCard from "./ProductCard";

const Products: React.FC = () => {
  const [todaysDeals, setTodaysDeals] = useState([]);

  useEffect(() => {
    getTodaysDeals().then((data) => setTodaysDeals(data));
  }, []);

  console.log(todaysDeals)

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
          Our Products
        </Typography>
        <Stack 
        direction="row" 
        spacing={2} 
        flexWrap="wrap"
        width="100%"
        >
          {todaysDeals.map((deal: any) => (
            <ProductCard
              productTitle={deal?.product_title}
              productMainImageURL={deal?.product_main_image_url}
              appSalePrice={deal?.app_sale_price}
              productId={deal?.product_id}
            />
          ))}
        </Stack>
      </Box>
    </>
  );
};

export default Products;
