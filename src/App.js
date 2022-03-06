import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];


function App() {

  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (categorie) => {


    if (categorie === 'all') {
      setMenuItems(items);
    } else {
      let newItems = items.filter((item) => item.category === categorie);
      setMenuItems(newItems);
    }
  }


  return (
    <main>
      <section className='menu section'>
        <div className="title">
          <h2>Outros Titulos</h2></div>
        <div className="underline"></div>
        <Categories categories={categories} filterItems={filterItems}></Categories>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
