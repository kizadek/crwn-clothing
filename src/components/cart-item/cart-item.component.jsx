import "./cart-item.styles.scss";

const CartItem = ({ cartItem }) => {
  const { name,imageUrl,price,quantity } = cartItem;

  return (
    <div className="cart-item-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className='item-details'>
        <span className="name">{name}</span>
        <span className="priceSection">
          {quantity}
          <span className="MULT">*</span>
          <span className="prici">
          <span className="prceSymbo">K</span>
          {price}
          </span>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
