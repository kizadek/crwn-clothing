import "./cart-dropdown.styles.scss";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";


const CartDropdown = () => {

  const navigate = useNavigate();

  const goTocheckoutHandler = () =>{
    navigate('/checkout')
  }
   
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems?.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <Button onClick={goTocheckoutHandler} >GO TO CHEKOUT</Button>
    </div>
  );
};

export default CartDropdown;
