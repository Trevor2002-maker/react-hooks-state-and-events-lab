import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  const handleToAddCart = () =>{
    setIsInCart(true);
  };
  const handleRemoveFomCart = () =>{
    setIsInCart(false);
  };
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={isInCart ? handleRemoveFomCart : handleToAddCart}>
        {isInCart ? "Remove from Cart" :"Add to Cart"}
        Add to Cart</button>
    </li>
  );
}

export default Item;
