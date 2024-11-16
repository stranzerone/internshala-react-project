import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { FaSearch } from 'react-icons/fa';

const ProductList = ({ products }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      {/* Search Bar */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative mt-32 w-full max-w-md">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 text-gray-700 border rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-400" />
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p className="text-center text-gray-500 col-span-full">No products found</p>
        )}
      </div>
    </div>
  );
};

export default ProductList;
