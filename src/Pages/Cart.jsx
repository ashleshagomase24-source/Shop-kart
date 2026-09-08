import { Link } from 'react-router-dom';
import '../../src/App.css';

const Cart = () => {
  return (
    <div className="page-shell cart-page">
      <p className="eyebrow">Your selection</p>
      <h1>Shopping cart</h1>
      <div className="cart-layout">
        <section className="cart-empty">
          <h2>Your cart is waiting.</h2>
          <p>Nothing here yet, but there are plenty of good things to discover.</p>
          <Link className="button" to="/products">Explore products <span aria-hidden="true">-&gt;</span></Link>
        </section>
        <aside className="cart-summary">
          <p className="eyebrow">At a glance</p>
          <h2>Order summary</h2>
          <div className="summary-line"><span>Items</span><span>0</span></div>
          <div className="summary-line"><span>Shipping</span><span>Calculated at checkout</span></div>
          <div className="summary-total"><span>Total</span><span>Rs. 0.00</span></div>
          <button className="button" type="button" disabled>Checkout</button>
        </aside>
      </div>
    </div>
  )
}

export default Cart
