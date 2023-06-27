import React, { useState } from 'react';
import './App.css';
import List from './Components/Listing';
import Header from './Components/Header';
import Authentication from './Components/Authentication';

function App() {
  const [itemCounts, setItemCounts] = useState({
    iPhone: 0,
    iWatch: 0,
    iPad: 0
  });
  const [isAuthenticated, setAuthenticated] = useState(false);

  const addItemToCart = (item) => {
    setItemCounts((prevItemCounts) => ({
      ...prevItemCounts,
      [item.id]: prevItemCounts[item.id] + 1
    }));
  };

  const handleAuthentication = (authenticated) => {
    setAuthenticated(authenticated);
  };

  return (
    <div className="App">
      {!isAuthenticated && <Authentication onAuthenticate={handleAuthentication} />}
      {isAuthenticated && (
        <>
          <Header itemCounts={itemCounts} />
          <List addItemToCart={addItemToCart} />
        </>
      )}
    </div>
  );
}

export default App;
