import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/common/Header'
import StateCard from '../components/common/StateCard'
import { DollarSign, Package, TrendingUp, User, View } from 'lucide-react'
import RevenueChart from '../components/analytics/RevenueChart'

const AnalyticsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Analytics"></Header>
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Revenue"
            icon={DollarSign}
            value="$800,123"
            color="#10B981"
          />
          <StateCard
            name="Users"
            icon={User}
            value="999"
            color="#8B5CF6"
          />
          <StateCard
            name="Orders"
            icon={Package}
            value="999"
            color="#F59E0B"
          />
          <StateCard
            name="Views"
            icon={View}
            value="349,231"
            color="#10B981"
          />
        </motion.div>

        <RevenueChart />
      </main>
    </div>
  );
}

export default AnalyticsPage