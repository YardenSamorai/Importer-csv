import React from "react";
import { UploadCloud } from "lucide-react";

const CsvImport = ({ handleFileChange, handleImportClick }) => {
  return (
    <div className="mt-12 p-6 bg-white shadow-md rounded-2xl flex flex-col items-center justify-center relative">
      <UploadCloud size={48} className="text-gray-500 mb-4" />
      <h2 className="text-xl font-semibold text-gray-700">Import CSV File</h2>
      <p className="text-sm text-gray-500 mb-4">
        Upload your CSV file to update products data
      </p>
      <input
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-sidebar file:text-white hover:file:bg-gray-600"
      />
      <button
        onClick={handleImportClick}
        className="absolute bottom-4 right-4 bg-sidebar text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition"
      >
        Import
      </button>
    </div>
  );
};

export default CsvImport;