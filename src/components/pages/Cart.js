import { useState } from "react";

export default function Cart({
  cart,
  products,
  updateItemFromCart,
  removeFromCart,
}) {
  const [price, setPrice] = useState(0);
  const calculatePrice = () => {
    return cart.reduce((acc, curr) => {
      const price = curr.price * curr.qty;

      return acc + price;
    }, 0);
  };

  let tax = price * 0.061;

  return (
    <div className="cart-wrapper">
      <div className="checkout-spot">
        <button className="button" onClick={() => setPrice(calculatePrice())}>
          Checkout
        </button>
        <div>
          <p>Subtotal: ${Math.floor(price)}</p>
          <p>Shipping: $100.00</p>
          <p>Tax: $ {Math.floor(tax)}</p>
          <p>Total: ${Math.floor(price + 100.0 + tax)}</p>
        </div>
      </div>
      <div className="items-container">
        {products.map((cartItem) => {
          return (
            <div className="item" key={cartItem.id}>
              <img src={cartItem.image} alt="item" />

              <div className="item-info">
                <h2>{cartItem.title}</h2>
                <label>Quanitity</label>
                <input
                  type="number"
                  min={0}
                  value={cart.find((item) => item.id === cartItem.id).qty}
                  onChange={(e) => {
                    const value = e.target.value;
                    updateItemFromCart(cartItem.id, value);
                  }}
                />
                <button onClick={() => removeFromCart(cartItem.id)}>
                  Remove from cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
