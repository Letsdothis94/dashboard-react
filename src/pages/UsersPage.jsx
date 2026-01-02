import React from 'react'
import { motion } from 'framer-motion';
import StateCard from '../components/common/StateCard';
import Header from '../components/common/Header';
import { Package, TrendingUp, AlertTriangle, DollarSign, UsersIcon, UserCheck, UserPlus, UserX } from 'lucide-react';
import UsersTable from '../components/users/UsersTable';


const UsersPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users"></Header>

      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StateCard
            name="Total Users"
            icon={UsersIcon}
            value="1,200"
            color="#6366F1"
          />
          <StateCard
            name="New Users Today"
            icon={UserPlus}
            value="22"
            color="#8B5CF6"
          />
          <StateCard
            name="Active Users"
            icon={UserCheck}
            value="850"
            color="#F59E0B"
          />
        </motion.div>

        <UsersTable />
      </main>
    </div>
  );
}

export default UsersPage