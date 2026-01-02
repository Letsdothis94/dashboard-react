import React from 'react'
import Header from '../components/common/Header';
import { motion } from 'framer-motion';
import StateCard from '../components/common/StateCard';
import { CheckCheck, Clock, DollarSignIcon, ShoppingBagIcon } from 'lucide-react';
import OrdersPieChart from '../components/orders/OrdersPieChart';
import OrdersTable from '../components/orders/OrdersTable';

const OrdersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Orders"></Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Orders"
            icon={ShoppingBagIcon}
            value="2173"
            color="#6366F1"
          />
          <StateCard
            name="Completed Orders"
            icon={CheckCheck}
            value="1821"
            color="#8B5CF6"
          />
          <StateCard
            name="Pending Orders"
            icon={Clock}
            value="352"
            color="#F59E0B"
          />
          <StateCard
            name="Total Revenue"
            icon={DollarSignIcon}
            value="$373,212"
            color="#10B981"
          />
        </motion.div>

        <div className="grid grid-col-1 gap-8">
            <OrdersPieChart />
            <OrdersTable />
        </div>
      </main>
    </div>
  );
}

export default OrdersPage