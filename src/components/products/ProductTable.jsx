import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Edit, Search, Trash2 } from 'lucide-react';


const productData = [
  {
    id: 1,
    name: "Headphones",
    category: "Electronics",
    price: 69.96,
    stock: 210,
    sales: 689,
  },
  {
    id: 2,
    name: "Sneakers",
    category: "Clothing",
    price: 45.12,
    stock: 190,
    sales: 450.12,
  },
  {
    id: 3,
    name: "Smart Watch",
    category: "Electronics",
    price: 110.00,
    stock: 100,
    sales: 330.00,
  },
  {
    id: 4,
    name: "Dumbell",
    category: "Sports & Outdoors",
    price: 30.00,
    stock: 300,
    sales: 3000.00,
  },
  {
    id: 5,
    name: "Coffee Maker",
    category: "Home & Garden",
    price: 45.00,
    stock: 99,
    sales: 450.00,
  },
];

const tableHeadings = [
  "Name" ,"Category" ,"Price", "Stock", "Sales", "Actions"
];

const ProductTable = () => {
    const [searchItem, setSearchItem] = useState("");
    const [filteredProducts, setFilteredProducts] = useState(productData);
    
    const handleSearch = (e) => {
        const item = e.target.value.toLowerCase();
        setSearchItem(item);
        setFilteredProducts(item);
        const filtered = productData.filter(product => product.name.toLowerCase().includes(item) || product.category.toLowerCase().includes(item));
        setFilteredProducts(filtered);
    }

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Product List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none"
            onChange={handleSearch}
            value={searchItem}
          />
          <Search className="absolute left-3 top-2.5 text-gray-400" size={18} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-700">
          <thead>
            <tr>
              {tableHeadings.map((title, i) => (
                <th
                  key={i}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider"
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-700">
            {filteredProducts.map((product) => (
              <motion.tr
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.category}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  ${product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.stock}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {product.sales}
                </td>
                <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-100'>
                    <button className='text-indigo-400 hover:text-red-300'>
                        <Edit size={18} />
                    </button>
                    <button className='text-red-400 hover:text-red-300'>
                        <Trash2 size={18} />
                    </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}

export default ProductTable