import React, { useEffect, useState } from "react";
import axios from "axios";

const WooProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchInventory = async (pageNum = 1) => {
    try {
      setLoading(true);
      const res = await axios.get(`http://localhost:4000/api/inventory?page=${pageNum}&limit=150`);
      setProducts(res.data.data);
      setTotalPages(res.data.totalPages);
    } catch (error) {
      console.error("Error fetching inventory:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory(page);
  }, [page]);

  if (loading) return <p className="text-center mt-4">Loading products...</p>;

  return (
    <div className="px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6 mt-8">
        {products.map((product) => (
          <div key={product.id} className="border rounded-xl p-4 shadow bg-white">
            <h2 className="text-lg font-bold">{product.category}</h2>
            <p className="text-sm text-gray-500">SKU: {product.sku}</p>
            {product.image && (
              <img
                src={product.image}
                alt={product.sku}
                className="mt-3 h-40 object-contain mx-auto"
              />
            )}
            <p className="mt-3 font-semibold text-green-600">${product.totalPrice}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-6 gap-4">
        <button
          disabled={page <= 1}
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Prev
        </button>
        <span className="px-4 py-2 text-gray-700">Page {page} of {totalPages}</span>
        <button
          disabled={page >= totalPages}
          onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
          className="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default WooProducts;