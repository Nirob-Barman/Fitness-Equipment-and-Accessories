import React from "react";

const NoProductsFound = ({ category }) => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">{category || "All Products"}</h2>
      <p className="text-gray-600">No products found for this category.</p>
    </div>
  );
};

export default NoProductsFound;
