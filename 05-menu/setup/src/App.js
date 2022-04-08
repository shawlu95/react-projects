import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const categorySet = ['all', ... new Set(items.map(item => item.category))];
console.log('categories', categorySet);

function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(categorySet);
  const filterItems = (category) => {
    if (category == 'all') {
      setMenuItems(items);
      return; // important line!
    }
    const filtered = items.filter(x => x.category === category);
    setMenuItems(filtered);
  }
  return (
    <main>
      <section className='menu selection'>
        <div className='title'>
          <h2>Our menu</h2>
          <div className='underline'></div>
        </div>
        <Categories filterItems={filterItems} categories={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  )
}

export default App;
