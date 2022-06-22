import React from "react";
import Order from "./Order";
import withContext from "../withContext";

const Orders = props => {
  const { orders } = props.context;
  console.log("Orders", orders)
  return (
    <>
      <div className="hero is-primary">
        <div className="hero-body container">
          <h4 className="title">Orders made</h4>
        </div>
      </div>
      <br />
      <div className="container">
        <div className="column columns is-multiline">
          {orders && orders.length ? (
            orders.map((order, index) => (
              <Order
                order={order}
                key={index}
                //addToCart={props.context.addToCart}
              />
            ))
          ) : (
            <div className="column">
              <span className="title has-text-grey-light">
                No order found!
              </span>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default withContext(Orders);