import React, { useContext } from 'react'
import './Cart.css';
import Modal from '../UI/Modal';
import CartContext from '../../Store/Cart-Context';

function Cart(props) {
  const Cartctx = useContext(CartContext)
  const cartCloseHandler = () => {
    props.setOpen(false);
  }
  let totalAmount = Cartctx.totalAmount.toFixed(2);
  const decreaseQuantityHandler = (itemId) => {
    Cartctx.removeItem(itemId);
  };
  return (
    <Modal>
      {Cartctx.items.map((item) => (
        <div className="cartcontainer">
          <h4>{item.name}</h4>
          <div>
            <span className="cartItem-price">${item.price.toFixed(2)}</span>
            <span>x{item.amount}</span>
          </div>
          <div className="cartItem-main--actions">
            <button
              className="cartItem-action-dec"
              onClick={() => decreaseQuantityHandler(item.id)}
            >
              -
            </button>
            <button className="cartItem-action-inc">+</button>
          </div>

        </div>
      ))}
      <div className="cartamount">
        <h2>Total Amount</h2>
        <h2>{totalAmount}</h2>
      </div>
      <div>
        <button onClick={cartCloseHandler}>
          Close
        </button>
        <button>Order</button>
      </div>

    </Modal>
  )
}

export default Cart