import "./checkout.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
const Checkout = () => {
  const { cartItems, removeItemToCart,totalCost } = useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <spna>Product</spna>
        </div>
        <div className="header-block">
          <spna>Description</spna>
        </div>
        <div className="header-block">
          <spna>Quantity</spna>
        </div>
        <div className="header-block">
          <spna>Price</spna>
        </div>
        <div className="header-block">
          <spna>Remove</spna>
        </div>
      </div>
     
        {cartItems.map((cartItem) => (
          <CheckoutItem
            key={cartItem.id}
            cartItem={cartItem}
            removeItemToCart={removeItemToCart}
          />
        ))}
       <span className="total"> Total Cost : K {totalCost}</span>
    </div>
  );
};

export default Checkout;
