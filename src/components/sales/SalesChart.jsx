import React, { useState } from 'react'
import { AreaChart, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area } from 'recharts'
import { animate, motion } from 'framer-motion'

const salesData = [
  { month: "Jan", sales: 14472 },
  { month: "Feb", sales: 36806 },
  { month: "Mar", sales: 121035 },
  { month: "Apr", sales: 65897 },
  { month: "May", sales: 19083 },
  { month: "Jun", sales: 27396 },
  { month: "Jul", sales: 145993 },
  { month: "Aug", sales: 42465 },
  { month: "Sep", sales: 93837 },
  { month: "Oct", sales: 15273 },
  { month: "Nov", sales: 142808 },
  { month: "Dec", sales: 125167 },
];

const SalesChart = () => {
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
          <AreaChart data={salesData}>
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
            <Area type="monotone" dataKey="sales" stroke="#6366F1" fill='#8B5CF6' fillOpacity={0.3} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export default SalesChart;