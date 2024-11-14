
  // src/pages/JuicePage.js
import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import axios from './axiosConfig';


const DrinksPage = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('/api/menu', { params: { category: 'drink' } });
      setMenuItems(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Juice Menu</h2>
      {menuItems.map(item => (
        <div key={item._id}>
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default DrinksPage;
