import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const[isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () =>{
    setIsDarkMode(prevState => !prevState);
  }

  return (
    <div className={isDarkMode ? "dark" : "light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Change to Light" : "Change to Dark"}
          Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
