import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Search, Edit, Trash2 } from 'lucide-react';

const orderData = [
  {
    id: 1,
    customer: "John D",
    total: 245.75,
    status: "Completed",
    date: "2025-01-12",
  },
  {
    id: 2,
    customer: "Maria S",
    total: 89.99,
    status: "Pending",
    date: "2025-02-03",
  },
  {
    id: 3,
    customer: "Alex R",
    total: 1_245.0,
    status: "Completed",
    date: "2025-01-28",
  },
  {
    id: 4,
    customer: "Liam K",
    total: 320.5,
    status: "Cancelled",
    date: "2025-03-10",
  },
  {
    id: 5,
    customer: "Sofia M",
    total: 560.0,
    status: "Completed",
    date: "2025-02-19",
  },
];

const tableHeadings = ["Customer", "Total", "Status", "Date", "Actions"];

const OrdersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredOrders, setFilteredOrders] = useState(orderData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        
        const filtered = orderData.filter((order) =>
            order.customer.toLowerCase().includes(value)
        );
        setFilteredOrders(filtered);
    };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Orders List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search orders..."
            className="bg-gray-700 text-white placeholder-gray-400 rounded-lg pl-10 pr-4 py-2 focus:outline-none"
            onChange={handleSearch}
            value={searchTerm}
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
            {filteredOrders.map((order) => (
              <motion.tr
                key={order.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {order.customer}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {order.total}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  <span className={`px-2 inline-flex text-sm leading-5 font-semibold rounded-full ${
                    order.status === "Completed" ? "bg-green-100 text-green-800" :
                    order.status === "Pending" ? "bg-yellow-100 text-yellow-800" :
                    order.status === "Cancelled" ? "bg-red-100 text-red-800" :
                    "bg-gray-100 text-gray-800"
                    }`
                  }
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {order.date}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  <button className="text-indigo-400 hover:text-red-300">
                    <Edit size={18} />
                  </button>
                  <button className="text-red-400 hover:text-red-300">
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

export default OrdersTable