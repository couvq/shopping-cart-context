import React from "react";
import { useEffect, useState } from "react";
import { getTodaysDeals } from "../utils/getTodaysDeals";

const Products: React.FC = () => {
  const [todaysDeals, setTodaysDeals] = useState([]);

//   useEffect(() => {
//     getTodaysDeals().then((data) => setTodaysDeals(data));
//   }, []);

  return <div>Products</div>;
};

export default Products;
