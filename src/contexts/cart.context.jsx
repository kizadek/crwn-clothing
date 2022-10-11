import { createContext, useState } from "react";

// helper method

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems Contains productToadd
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );
  if (existingCartItem) {
    /**look for the value that has the same id as
     * the productToAdd then update its quantity value;
     *  when creteing the new list and return
     *  other properties as they are
     * */
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  // if found, increment quantity

  // return new arry with modifed cartItems/ new cart item
  return [...cartItems, { ...productToAdd, quantity: 1 }];
};


//cart items count

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  getCartItemCount: () => {},

});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);


  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
    // console.log(productToAdd);
  };





  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
