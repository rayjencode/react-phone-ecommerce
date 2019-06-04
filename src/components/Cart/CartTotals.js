import React from "react";
import { Link } from "react-router-dom";
import PayPalButton from "./PayPalButton";

export default function CartTotals({ value, history, style }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <div className="col-md-4">
      <div className="card mt-2">
        <h4 className="card-header">Total Payment</h4>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <p className="text-muted">Subtotal: </p>
            <p className="text-muted">${cartSubTotal}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p className="text-muted">Tax:</p>
            <p className="text-muted"> ${cartTax}</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>Total: </p>
            <p>${cartTotal}</p>
          </div>

          <div className="d-flex justify-content-between">
            <Link to="/">
              <button
                className="btn-main-secondary px-3 py-2"
                onClick={() => clearCart()}
              >
                Empty Cart
              </button>
            </Link>
            <PayPalButton
              total={cartTotal}
              clearCart={clearCart}
              history={history}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
