import React from "react";

export default function ProductFilter() {
  return (
    <div className="py-3 mb-4 flex-1 justify-end flex">
      <div className="flex gap-6">
        <div className="flex items-center">
          <label
            htmlFor="filter-by-categories"
            className=" mb-2 min-w-[120px] text-right pr-3"
          >
            Categories
          </label>
          <select
            name=""
            id="filter-by-categories"
            className="px-3 py-3 border d-block w-full min-w-[120px]"
          >
            <option value="">Cat 1</option>
            <option value="">Cat 1</option>
            <option value="">Cat 1</option>
          </select>
        </div>
        <div className="flex  items-center">
          <label
            htmlFor="sort-by"
            className=" mb-2  min-w-[120px] text-right pr-3"
          >
            Sort by
          </label>
          <select
            name=""
            id="sort-by"
            className="px-3 py-3 border d-block w-full min-w-[120px]"
          >
            <option value="">Price</option>
            <option value="">Price</option>
            <option value="">Price</option>
          </select>
        </div>
      </div>
    </div>
  );
}
