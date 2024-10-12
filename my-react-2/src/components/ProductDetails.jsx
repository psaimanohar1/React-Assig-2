import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container mx-auto p-4">
      {/* <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-2" /> */}
      <img src={product.image} alt={product.title} className="product-img mb-2" />

      <h2 className="text-lg font-bold">{product.title}</h2>
      <p className="text-gray-700">${product.price}</p>
      <p>{product.description}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-blue-500 text-white px-3 py-2 mt-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
