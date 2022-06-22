import React from "react";

const Order = props => {

  const { order } = props;

  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {order.client}{" "}
              <span className="tag is-primary">{order.tracking}</span>
            </b>
            <div>{order.status}</div>
            
          </div>
        </div>
      </div>    
    </div>
  );
};

export default Order;
