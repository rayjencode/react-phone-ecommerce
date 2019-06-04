import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { increment, decrement, removeItem } = value;

  return (
    <div className="mx-auto">
      <div className="cart-card media mt-2">
        <img src={img} alt={title} width="90px" className="mr-3 rounded" />
        <div className="media-body">
          <div className="d-flex justify-content-between">
            <h4 className="mb-0">{title}</h4>
            <i
              className="cart-card--icon-delete fas fa-times"
              onClick={() => removeItem(id)}
            />
          </div>
          <div className="d-flex justify-content-between mt-3">
            <p className="mb-0 text-muted">${price}</p>
            <div className="text-muted cart-card--increment d-flex justify-content-between">
              <i
                className="text-muted fas fa-minus cart-card--icon"
                onClick={() => decrement(id)}
              />
              <p className="mb-0 mx-3">{count}</p>
              <i
                className="fas fa-plus cart-card--icon"
                onClick={() => increment(id)}
              />
            </div>
            <p className="bold mb-0">${total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
