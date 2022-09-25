import React from 'react';
import { ProductCardProps } from '../models/models';

const ProductCard: React.FC<ProductCardProps> = ({
    productTitle,
    productMainImageURL,
    appSalePrice,
    productId
}) => {


  return (
    <div>ProductCard</div>
  );
}

export default ProductCard;