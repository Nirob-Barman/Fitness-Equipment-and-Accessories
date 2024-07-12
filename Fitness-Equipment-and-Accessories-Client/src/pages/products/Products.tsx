import { useGetProductsQuery } from "../../redux/features/products/productsApi";
import { Link, useLocation } from "react-router-dom";
import NoProductsFound from "./NoProductsFound";

const Products = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("category") || "";
  console.log(category);

  const { data: products, error, isLoading } = useGetProductsQuery(undefined);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const filteredProducts = category
    ? products.filter((product) => product.slug === category)
    : products;

  
  return (
    <div className="container mx-auto">
      {filteredProducts.length === 0 ? (
        <NoProductsFound category={category} />
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">
            {category || "All Products"}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product._id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <img
                  src={product.images}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-medium text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mt-2">
                    ${product.price.toFixed(2)}
                  </p>
                  <div className="mt-4">
                    <Link to={`/products/${product._id}`}>
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                      View Details
                    </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
