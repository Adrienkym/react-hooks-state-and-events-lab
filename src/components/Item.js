import React, {useState} from "react";

function Item({ name, category }) {
  const [isAdded, setIsAdded] = useState(false);

  function handleAddClick() {
    setIsAdded((isAdded) => !isAdded);
  }
  return (
    <li className={`item ${isAdded ? "in-cart" : ""}`}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleAddClick}>
        {isAdded ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
