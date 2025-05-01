import React, { useState, useEffect } from 'react';

export const Content = ({ items = [] }) => { 

  const initialDisplayItems = items.slice(0, 10);
  const [displayedItems, setDisplayedItems] = useState(initialDisplayItems);
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    console.log("Client hydration complete, adding remaining items.");
    setDisplayedItems(items);
    setIsClientLoaded(true);
  }, [items]);

  return (
    <main>
      <h2>Todo List</h2>
      <p>{isClientLoaded ? 'Displaying all items (client updated).' : 'Displaying initial items (server rendered).'}</p>
      <ul>
        {displayedItems.map(item => (
          <li key={item.id}>{item.title} {item.completed ? '(Completed)' : ''}</li>
        ))}
      </ul>
      {displayedItems.length < items.length && <p>Loading remaining items...</p>}
    </main>
  );
};