import React from 'react'
import { motion } from 'framer-motion'
import StateCard from '../components/common/StateCard'
import Header from '../components/common/Header'
import { UsersIcon, UserCheck, UserPlus, DollarSignIcon, ShoppingCartIcon, TrendingUpIcon, CreditCard,} from "lucide-react";
import SalesChart from '../components/sales/SalesChart';


const SalesPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Sales"></Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Revenue"
            icon={DollarSignIcon}
            value="$850,232"
            color="#6366F1"
          />
          <StateCard
            name="Avg. Order Value"
            icon={ShoppingCartIcon}
            value="$21.50"
            color="#8B5CF6"
          />
          <StateCard
            name="Conversion Rate"
            icon={TrendingUpIcon}
            value="2.50%"
            color="#F59E0B"
          />
          <StateCard
            name="Sales Growth"
            icon={CreditCard}
            value="10.12%"
            color="#10B981"
          />
        </motion.div>

        <SalesChart />
      </main>
    </div>
  );
}

export default SalesPage