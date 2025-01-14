import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "../UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const totalPrice = cartCtx.items.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleCloseCart = () => {
    userProgressCtx.hideCart();
  };

  const handleGoToCheckout = () => {
    userProgressCtx.showCheckout();
  };

  return (
    <div>
      <Modal
        className="cart"
        open={userProgressCtx.progress === "cart"}
        onClose={userProgressCtx.progress === "cart" ? handleCloseCart : null}
      >
        <h2>Your Cart</h2>
        <ul>
          {cartCtx.items.map((item) => (
            <CartItem
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              onIncrease={() => cartCtx.addItem(item)}
              onDecrease={() => cartCtx.removeItem(item.id)}
            />
          ))}
        </ul>
        <p className="cart-total">{currencyFormatter.format(totalPrice)}</p>
        <p className="modal-actions">
          <Button textOnly onClick={handleCloseCart}>
            Close
          </Button>
          {cartCtx.items.length > 0 && (
            <Button onClick={handleGoToCheckout}>Go to Checkout</Button>
          )}
        </p>
      </Modal>
    </div>
  );
};

export default Cart;
