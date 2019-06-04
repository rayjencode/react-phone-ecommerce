import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { modalOpen, closeModal } = value;
          const { id, title, img, price } = value.modalProduct;

          if (!modalOpen) {
            return null;
          } else {
            return (
              <div className="modal-cart">
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="p-5 col-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize"
                    >
                      <h5>item added to the cart</h5>
                      <img src={img} alt={title} className="img-fluid" />
                      <h5>{title}</h5>
                      <h5 className="text-blue">Price: ${price}</h5>
                      <Link to="/">
                        <button
                          className="btn-main-secondary px-4 py-2"
                          onClick={() => closeModal()}
                        >
                          Continue Shopping
                        </button>
                      </Link>
                      <Link to="/cart">
                        <button
                          className="btn-main-success mt-3 px-4 py-2"
                          onClick={() => closeModal()}
                        >
                          Go to the Cart
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}
