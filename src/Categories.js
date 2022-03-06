import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {
        categories.map((categorie) => (
          <button className='filter-btn' onClick={() => filterItems(categorie)}>{categorie}</button>
        ))
      }
    </div>
  );
};

export default Categories;
