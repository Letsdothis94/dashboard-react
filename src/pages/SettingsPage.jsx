import React from 'react'
import Header from '../components/common/Header'
import Profile from '../components/settings/Profile'
import Notifications from '../components/settings/Notifications'

const SettingsPage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10 bg-gray-900'>
        <Header title="Settings" />
        <main>
            <Profile />
            <Notifications />
        </main>
    </div>
  )
}

export default SettingsPage