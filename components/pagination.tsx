import React from "react";

const Pagination = () => {
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          Previous
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          1
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          2
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          3
        </button>
        <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
