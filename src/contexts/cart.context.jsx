import { createContext, useState,useEffect } from "react";

// helper method

const addCartItem = (cartItems, CartItemToAdd) => {
  //find if cartItems Contains productToadd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === CartItemToAdd.id
  );
  if (existingCartItem) {
    /**look for the value that has the same id as
     * the productToAdd then update its quantity value;
     *  when creteing the new list and return
     *  other properties as they are
     * */
    return cartItems.map((cartItem) =>
      cartItem.id === CartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if found, increment quantity

  // return new arry with modifed cartItems/ new cart item
  return [...cartItems, { ...CartItemToAdd, quantity: 1 }];
};

const decrement = (cartItems, productToDecrement) => {
  return cartItems.map((cartItem) =>
    cartItem.id === productToDecrement.id
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

// helper method
const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((item) => item.id !== productToRemove.id);
};
//cart items count

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  decrementQuntity: () => {},
  removeItemToCart: () => {},
  getCartItemCount: () => {},
  cartCount: 0,
  totalCost:0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount,setCartCount]  = useState(0)
  const [totalCost, setCartTotalCount]  = useState(0)
 
  useEffect(()=>{
       const  newCartCount = cartItems.reduce(
        (total,cartItem) => total + cartItem.quantity,0
       );
       setCartCount(newCartCount);
  },[cartItems]);

  useEffect(()=>{
    const  newCartTotal = cartItems.reduce(
     (total,cartItem) => total + cartItem.quantity * cartItem.price,0
    );
    setCartTotalCount(newCartTotal);
},[cartItems]);


  const addItemToCart = (CartItemToAdd) => {
    setCartItems(addCartItem(cartItems, CartItemToAdd));
  };

  const decrementQuntity = (CartItemToDecrement) => {
    console.log(CartItemToDecrement.quantity);
    CartItemToDecrement.quantity === 1
      ? removeItemToCart(CartItemToDecrement)
      : setCartItems(decrement(cartItems, CartItemToDecrement));
  };
  const removeItemToCart = (CartItemToAdd) => {
    setCartItems(removeCartItem(cartItems, CartItemToAdd));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    decrementQuntity,
    removeItemToCart,
    cartItems,
    cartCount,
    totalCost
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
