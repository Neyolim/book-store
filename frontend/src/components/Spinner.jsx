import React from "react";

export default function Spinner() {
  return (
    <div className="flex justify-center" style={{ marginTop: '10vh' }}>
      <div className="w-12 h-12 border-4 border-gray-300 border-t-gray-600 rounded-full animate-spin"></div>
    </div>
  );
}

