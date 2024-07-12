import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../../../redux/features/products/productsApi";

const Categories = () => {
  const { data: products } = useGetProductsQuery(undefined);
  // const categories = [
  //   {
  //     name: "Treadmills",
  //     slug: "treadmills",
  //     image: "path_to_treadmill_image",
  //   },
  //   { name: "Dumbbells", slug: "dumbbells", image: "path_to_dumbbell_image" },
  //   { name: "Yoga Mats", slug: "yoga_mats", image: "path_to_yoga_mat_image" },
  //   { name: "Hey You", slug: "hey_you", image: "path_to_yoga_mat_image" },
  // ];

  //   let categories = [];
  // // Check if products data is available
  // if (products) {
  //   categories = products.map((product) => ({
  //     name: product.name,
  //     slug: product.slug,
  //     image: product.images,
  //   }));
  // }

  let uniqueProducts = {};
  if (products && products.length > 0) {
    products.forEach((product) => {
      const { slug } = product;
      if (!uniqueProducts[slug]) {
        uniqueProducts[slug] = {
          name: slug,
          slug,
          image: `path_to_${slug}_image`,
        };
      }
    });
  }

  const categories = Object.values(uniqueProducts);

  console.log(categories);
    

  const navigate = useNavigate();

  const handleCategoryClick = (categoryName: string) => {
    navigate(`/products?category=${categoryName}`);
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Categories</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
            onClick={() => handleCategoryClick(category.slug)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-medium text-gray-800">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
