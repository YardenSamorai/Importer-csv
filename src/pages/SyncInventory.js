import React from 'react'
import DashboardLayout from '../components/DashboardLayout'

const SyncInventory = () => {
  return (
    <DashboardLayout>
        <div>
            <h1 className="text-3xl font-bold mb-4">Sync Inventory</h1>
            <p className="mb-6 text-gray-600">Sync your inventory with WooCommerce:</p>
            <div className="flex justify-center items-center h-screen">
                <img src="/images/empty.png" alt="No Data" className="w-1/2 h-auto" />
            </div>
        </div>
    </DashboardLayout>
  )
}

export default SyncInventory
