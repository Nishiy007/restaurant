import React from 'react'
import './Cart.css';
import Modal from '../UI/Modal';

function Cart() {
  return ( 
    <Modal>
    <div className="cartcontainer">
        <h4>Sushi</h4>
        <div className="cartamount">
            <h2>Total Amount</h2>
            <h2>35.62</h2>
        </div>
        <div>
            <button>
                Close
            </button>
            <button>Order</button>
        </div>
    </div>
    </Modal>
  )
}

export default Cart