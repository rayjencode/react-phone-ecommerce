import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart } = this.props.product;
    return (
      <div className="product col-lg-3 col-md-4 col-sm-6">
        <div className="product__card card my-3">
          <ProductConsumer>
            {value => (
              <div
                className="product__img--container"
                onClick={() => value.handleDetail(id)}
              >
                <Link to="/details">
                  <img
                    className="product__card--img card-img-top p-5"
                    src={img}
                    alt={title}
                  />
                </Link>
                <button
                  className="product__cart--btn cart-btn"
                  disabled={inCart ? true : false}
                  onClick={() => {
                    value.addToCart(id);
                    value.openModal(id);
                  }}
                >
                  {inCart ? (
                    <p className="text-capitalize mb-0" disabled>
                      in Cart
                    </p>
                  ) : (
                    <i className="product__cart--icon fas fa-cart-plus" />
                  )}
                </button>
              </div>
            )}
          </ProductConsumer>

          <div className="product__card--footer card-footer">
            <div className="d-flex justify-content-between ">
              <h5 className="align-self-center mb-0">{title}</h5>
              <h5 className="align-self-center mb-0">${price}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};
