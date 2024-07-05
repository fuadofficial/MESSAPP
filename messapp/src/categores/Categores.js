import React from "react";

function Categores({ categories, filterItems }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            onClick={() => filterItems(category)}
            type="button"
            className="filter-btn"
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

export default Categores;
