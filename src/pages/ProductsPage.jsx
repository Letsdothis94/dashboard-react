import React from 'react'
import Header from "../components/common/Header";
import { motion } from "motion/react";
import StateCard from "../components/common/StateCard";
import { AlertTriangle, BarChart2, DollarSign, Package, ShoppingBag, TrendingUp, Users, Zap } from "lucide-react";
import ProductTable from '../components/products/ProductTable';
import SalesTrendChart from '../components/products/SalesTrendChart';
import CategoryDistributionChart from '../components/overview/CategoryDistributionChart';

const ProductsPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Overview"></Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Products"
            icon={Package}
            value="2,345"
            color="#6366F1"
          />
          <StateCard
            name="Top Selling"
            icon={TrendingUp}
            value="32"
            color="#8B5CF6"
          />
          <StateCard
            name="Low Stock"
            icon={AlertTriangle}
            value="5"
            color="#F59E0B"
          />
          <StateCard
            name="Total Revenue"
            icon={DollarSign}
            value="$21,000"
            color="#10B981"
          />
        </motion.div>

        <ProductTable />

        <div className='grid grid-col-1 lg:grid-cols-2 gap-8'>
          <SalesTrendChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  )
}

export default ProductsPage