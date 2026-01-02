import { Route, Routes } from 'react-router-dom'
import './App.css'
import SideBar from './components/SideBar'
import OverviewPage from './pages/OverviewPage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import SalesPage from './pages/SalesPage'
import OrdersPage from './pages/OrdersPage'

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
      <SideBar />
      <Routes>
        <Route path="/" element={<OverviewPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/users" element={<UsersPage />}></Route>
        <Route path="/sales" element={<SalesPage />}></Route>
        <Route path="/orders" element={<OrdersPage />}></Route>
      </Routes>
    </div>
  );
}

export default App
