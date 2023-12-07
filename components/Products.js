import axios from "axios";
import { useEffect, useState } from "react";

const Products = ({ products, setCart, search, cart }) => {
  const handleAddtocart = (e, product) => {
    e.preventDefault();
    if (cart.find((item) => item.name === product.name)) {
      alert("Item already in cart");
      return;
    }
    setCart([...cart, { ...product, quantity: e.target.quantity.value }]);
  };

  return (
    <div
      style={{ width: "100%" }}
      class="row row-cols-1 row-cols-md-4 py-5 px-5 g-5"
    >
      {products
        ?.filter((product) => product.name.toLowerCase().includes(search))
        ?.map((product, index) => {
          return (
            <div class="col">
              <div class="card p-2">
                <img
                  style={{ height: "300px" }}
                  src={product.thumbnail}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p className="d-flex  gap-3">
                    <b>₹{product.current_price}</b>
                    <s>₹{product.original_price}</s>
                  </p>
                  <form
                    onSubmit={(e) => handleAddtocart(e, product)}
                    className="d-flex justify-content-between gap-3"
                  >
                    <select
                      name="quantity"
                      style={{ width: "100px" }}
                      className="px-2 rounded"
                    >
                      <option selected value="1">
                        1
                      </option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <button type="submit" class="btn btn-primary">
                      Add to Cart
                    </button>
                  </form>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default Products;
