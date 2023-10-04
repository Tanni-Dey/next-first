import { useRouter } from "next/router";
import React from "react";

const ProductsDetails = () => {
  const router = useRouter();

  return <div>id product : {router.route}</div>;
};

export default ProductsDetails;
