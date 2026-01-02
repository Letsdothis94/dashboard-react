import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { Edit, Search, Trash2 } from "lucide-react";

const userData = [
  {
    id: 1,
    name: "Cristian C",
    email: "cris@email.com",
    role: "Admin",
    status: "Active",
  },
  {
    id: 2,
    name: "Alex M",
    email: "alexm@email.com",
    role: "User",
    status: "Active",
  },
  {
    id: 3,
    name: "Jordan P",
    email: "jordanp@email.com",
    role: "Editor",
    status: "Inactive",
  },
  {
    id: 4,
    name: "Sofia L",
    email: "sofial@email.com",
    role: "User",
    status: "Active",
  },
  {
    id: 5,
    name: "Daniel R",
    email: "danielr@email.com",
    role: "Moderator",
    status: "Active",
  },
  {
    id: 6,
    name: "Emily K",
    email: "emilyk@email.com",
    role: "User",
    status: "Inactive",
  },
];

const tableHeadings = [
  "Name",
  "Email",
  "Role",
  "Status",
  "Actions",
];

const UsersTable = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(userData);

    const handleSearch = (e) => {
        const value = e.target.value.toLowerCase();
        setSearchTerm(value);
        
        const filtered = userData.filter((user) =>
            user.name.toLowerCase().includes(value) ||
            user.email.toLowerCase().includes(value)
        );
        setFilteredUsers(filtered);
    };

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-100">Users List</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
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
            {filteredUsers.map((user) => (
              <motion.tr
                key={user.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-100">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-100">
                  {user.status}
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

export default UsersTable