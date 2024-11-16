import React from 'react';
import { useParams, Link } from 'react-router-dom';
import useFetch from '../hooks/useFetchProducts'; // Import the custom hook

const ProductDetail = () => {
  const { id } = useParams(); // Get productId from URL params
  const { data, loading, error } = useFetch('https://dummyjson.com/products'); // Pass the URL to fetch products

  // Filter the product based on productId
  const product = data ? data.find((item) => item.id === parseInt(id)) : null;

  console.log(product,id,"length")
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Link to="/" className="text-blue-500">Back to Products</Link>
      <div className="flex flex-col lg:flex-row mt-8">
        {/* Product Image */}
        <div className="lg:w-1/3">
          <img src={product.images[0]} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
        </div>

        {/* Product Info */}
        <div className="lg:w-2/3 lg:pl-8 mt-4 lg:mt-0">
          <h2 className="text-2xl font-semibold">{product.title}</h2>
          <p className="text-lg text-gray-600">{product.description}</p>
          <p className="mt-4 font-bold text-xl">${product.price}</p>
          <p className="mt-2 text-sm text-gray-500">Brand: {product.brand}</p>
          <p className="mt-2 text-sm text-gray-500">Stock: {product.stock}</p>
          <p className="mt-2 text-sm text-gray-500">Availability: {product.availabilityStatus}</p>
          <p className="mt-2 text-sm text-gray-500">Discount: {product.discountPercentage}%</p>

          {/* Add to Cart Button */}
          <button className="mt-6 bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600">
            Add to Cart
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12">
        <h3 className="text-xl font-semibold">Customer Reviews</h3>
        {product.reviews.length > 0 ? (
          <div className="mt-4">
            {product.reviews.map((review, index) => (
              <div key={index} className="mb-4">
                <p className="font-semibold">{review.reviewerName}</p>
                <p className="text-gray-500">{review.comment}</p>
                <p className="text-yellow-500">Rating: {review.rating} / 5</p>
                <hr className="mt-2" />
              </div>
            ))}
          </div>
        ) : (
          <p>No reviews yet</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
