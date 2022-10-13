import "./checkout-item.styles.scss";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CheckoutItem = ({ cartItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  const { removeItemToCart, addItemToCart, decrementQuntity } =
    useContext(CartContext);

  const handleRemove = () => removeItemToCart(cartItem);
  const handleIncremnt = () => addItemToCart(cartItem);
  const handleDecrement = () => decrementQuntity(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
     
      <span className="quantity">
        <div className="arrow" onClick={handleDecrement}>&#10094;</div>
       <span className="value">{quantity}</span> 
        <div className="arrow" onClick={handleIncremnt}>&#10095;</div>
      </span>
     
      <span className="price">K{price}</span>
      <div className="remove-button">
        <span onClick={handleRemove}>❌</span>
      </div>
    </div>
  );
};

export default CheckoutItem;
