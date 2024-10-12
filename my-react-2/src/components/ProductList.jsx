import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ products, addToCart }) => {
  return (
    <div className="container mx-auto p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="product-card flex flex-col sm:flex-row items-center border p-4 rounded shadow-lg mb-4 max-w-3xl mx-auto"
        >
          <img
            src={product.image}
            alt={product.title}
            className="product-img mb-2 sm:mb-0 sm:mr-4 w-32 h-32 object-cover"
          />

          <div className="product-details text-left flex-1">
            <h2 className="text-lg font-bold">{product.title}</h2>
            <p className="text-gray-700">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-3 py-2 mt-2 rounded"
            >
              Add to Cart
            </button>
            <Link
              to={`/product/${product.id}`}
              className="bg-blue-300 text-white px-3 py-2 mt-2 inline-block rounded mr-8"
            >
              View Product
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
