import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { ResponsiveContainer, AreaChart, CartesianGrid, XAxis, YAxis, Tooltip, Area } from 'recharts';

const revenueData = [
  { month: "Jul", revenue: 72345, target: 60000 },
  { month: "Aug", revenue: 55210, target: 62000 },
  { month: "Sep", revenue: 83901, target: 64000 },
  { month: "Oct", revenue: 61432, target: 66000 },
  { month: "Nov", revenue: 90118, target: 68000 },
  { month: "Dec", revenue: 47556, target: 70000 },
  { month: "Jan", revenue: 69884, target: 72000 },
  { month: "Feb", revenue: 58777, target: 74000 },
  { month: "Mar", revenue: 64209, target: 76000 },
  { month: "Apr", revenue: 80650, target: 78000 },
  { month: "May", revenue: 56998, target: 80000 },
  { month: "Jun", revenue: 59043, target: 82000 },
];

const RevenueChart = () => {
  const [selectedMonth, setSelectedMonth] = useState("This Month");

  return (
    <motion.div
      className="bg-gray-800 bg-opacity-50 backdrop-blur-md shadow-lg rounded-xl p-6 border border-gray-700"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="text-lg font-medium mb-4 text-gray-100">Sales Overview</h2>

      <select
        className="bg-gray-700 text-white rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option>This Week</option>
        <option>This Month</option>
        <option>This Quarter</option>
        <option>This Year</option>
      </select>

      <div className="h-80">
        <ResponsiveContainer width={"100%"} height={"100%"}>
          <AreaChart data={revenueData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
            <XAxis dataKey="month" stroke="#9CA3AF" />
            <YAxis stroke="#9CA3AF" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(31, 41, 55, 0.8)",
                borderColor: "#4B5563",
              }}
              itemStyle={{ color: "#E5E7EB" }}
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#8B5CF6"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="target"
              stroke="#10B981"
              fill="#8B5CF6"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default RevenueChart