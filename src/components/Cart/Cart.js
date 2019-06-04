import React, { Component } from "react";
import Title from "../Title";
import CartList from "./CartList";
import EmptyCart from "./EmptyCart";
import CartTotals from "./CartTotals";
import { ProductConsumer } from "../../context";

export default class Cart extends Component {
  render() {
    return (
      <section className="container">
        <ProductConsumer>
          {value => {
            const { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="your" title="cart" />
                  <div className="row">
                    <CartList value={value} />
                    <CartTotals
                      value={value}
                      history={this.props.history}
                    />
                  </div>
                </React.Fragment>
              );
            } else {
              return (
                <React.Fragment>
                  <EmptyCart />
                </React.Fragment>
              );
            }
          }}
        </ProductConsumer>
      </section>
    );
  }
}

const style = {
  background: "red"
};
