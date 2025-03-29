import React from "react";
import DashboardLayout from "../components/DashboardLayout";
import WooProducts from "../components/WooProducts";

const Inventory = () => {
  return (
    <DashboardLayout>
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Inventory ✨</h1>
        <p className="mb-6 text-gray-600">All products from your WooCommerce store:</p>
        <WooProducts />
      </div>
    </DashboardLayout>
  );
};

export default Inventory;