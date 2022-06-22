import React from "react";

const Product = props => {

  const { product } = props;
  const handleCartAmmount = (e) => { 
    let cart = this.state.cart;
    console.log("product name in cart ", cart[product.name].amount)
    if(cart[product.name].amount = product.stock){
      
    }
  } 
  return (
    <div className=" column is-half">
      <div className="box">
        <div className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img
                src="https://bulma.io/images/placeholders/128x128.png"
                alt={product.description}
              />
            </figure>
          </div>
          <div className="media-content">
            <b style={{ textTransform: "capitalize" }}>
              {product.name}{" "}
              <span className="tag is-primary">${product.price}</span>
            </b>
            <div>{product.description}</div>
            {product.stock > 0 ? (
              <small>{product.stock + " Available"}</small>
            ) : (
              <small className="has-text-danger">Out Of Stock</small>
            )}
            {product.stock > 0 ? (
            <div className="is-clearfix">
              <button
              
                className="button is-small is-outlined is-primary   is-pulled-right"
                
                onClick={() => 
                  props.addToCart({
                    id: product.name,
                    product,
                    amount: 1
                  })
                }
              >
                Add to Cart
              </button>
            </div>
             ) : (
              <button
                disabled
                className="button is-small is-outlined is-primary   is-pulled-right"
              >
                Out of Stock

              </button>
              )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
