import { BarChart2 } from 'lucide-react'
import React from 'react'

const SideBar = () => {

    const SIDEBAR_ITEMS = [
        {
            name: "Overview",
            icon: BarChart2,
            color: "#6366f1",
            path: "/"
        },
    ];

  return (
    <div>Sidebar</div>
  )
}

export default SideBar