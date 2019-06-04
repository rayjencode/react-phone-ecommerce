import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import Product from "./Product";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            title,
            img,
            info,
            company,
            price,
            inCart
          } = value.detailProduct;

          return (
            <div className="container py-3">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-10 col-md-6 mx-auto my-3">
                  <img src={img} className="img-fluid" alt={title} />
                </div>
                <div className="col-10 col-md-6 mx-auto my-3 text-capitalize">
                  <h2>Model: {title}</h2>
                  <p className="text-center text-uppercase text-muted mt-3 mb-2">
                    Made by: {company}
                  </p>
                  <h4 className="strong text-blue">Price: ${price}</h4>
                  <p className="text-muted lead">Some Info: {info}</p>
                  <div className="mt-5">
                    <Link to="/">
                      <button className="btn-main-secondary px-3 mr-5">
                        <i className="fas fa-angle-double-left mr-1" /> Back to
                        Product
                      </button>
                    </Link>
                    <button
                      className="btn-main-success px-3"
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                        value.openModal(id);
                      }}
                    >
                      <i className="fas fa-cart-plus mr-3" />
                      {inCart ? "In cart" : "Add to Cart"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
