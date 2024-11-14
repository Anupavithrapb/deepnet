
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Css/MenuPage.css';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [category, setCategory] = useState('food'); // Default category

  useEffect(() => {
    fetchMenuItems(category);
  }, [category]);

  const fetchMenuItems = async (category) => {
    try {
      const response = await axios.get(`/api/menu`, {
        params: { category },
      });
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu items:', error);
    }
  };

  return (
    <div className="menu-page" >
      <header className="menu-header">
        <h1>Menu</h1>
        <p>
          Please take a look at our menu featuring food, drinks, and brunch. If you’d like to place an order, use the "Order Online" button located below the menu.
        </p>
        </header>
        <nav className="menu-nav">
          <button onClick={() => setCategory('food')} className={category === 'food' ? 'active' : ''}>Food</button>
          <button onClick={() => setCategory('drink')} className={category === 'drink' ? 'active' : ''}>Drinks</button>
          <button onClick={() => setCategory('brunch')} className={category === 'brunch' ? 'active' : ''}>Brunch</button>
        </nav>
     

      <section className="menu-items">
        {menuItems.map((item) => (
          <div key={item._id} className="menu-item">
            <h3>{item.name} <span>${item.price}</span></h3>
            <p>{item.description}</p>
          </div>
        ))}
      </section>

    </div>
  );
};

export default MenuPage;
