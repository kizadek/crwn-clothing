import "./cart-dropdown.styles.scss";
import { useContext } from "react";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem cartItem={item} />
        ))}
      </div>
      <Button>GO TO CHEKOUT</Button>
    </div>
  );
};

export default CartDropdown;
