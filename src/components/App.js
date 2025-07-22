import React, { useState}  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
   
  const [isdarkMode, setIsDarkMode] = useState(false);

  function handleToggleClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }
  const appClass = isdarkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleToggleClick}>
          {isdarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
