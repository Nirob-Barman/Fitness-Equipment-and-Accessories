import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../../redux/features/products/productsApi";

const ProductDetails = () => {
  const { productId } = useParams();
  const { data: product, error, isLoading } = useGetProductByIdQuery(productId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="container mx-auto mt-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={product.images}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {product.name}
          </h2>
          <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-4">{product.description}</p>
          <p className="text-gray-600 mb-4">Category: {product.category}</p>
          <p className="text-gray-600 mb-4">
            Stock Quantity: {product.stockQuantity}
          </p>
          {/* You can add more details here as needed */}
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
