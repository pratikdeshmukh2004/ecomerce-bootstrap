const Cart = ({ cart, setActiveCart }) => {
  console.log(cart);
  const total_price = cart.reduce((total, product) => {
    return total + product.current_price * product.quantity;
  }, 0);
  return (
    <div className="py-3">
      <h1 className="fw-bold h4 text-center mt-3">
        Cart {cart.length} - ₹{parseInt(total_price).toLocaleString()}
      </h1>
      <div>
        {cart.length === 0 && (
          <div className="d-flex py-5 justify-content-center">
            <p className="text-body-secondary">Cart is empty</p>
          </div>
        )}
        {cart?.map((product) => (
          <div
            style={{ maxWidth: "600px" }}
            class="card mx-auto my-3 px-3 py-3 mb-3"
          >
            <div class="row g-0">
              <div class="col-md-3">
                <img
                  style={{ width: "150px", height: "150px" }}
                  src={product.thumbnail}
                  class="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">{product.name}</h5>
                  <p className="d-flex  gap-3">
                    <b>₹{product.current_price}</b>
                    <s>₹{product.original_price}</s>
                  </p>
                  <form
                    onSubmit={(e) => handleAddtocart(e, product)}
                    className="d-flex gap-3"
                  >
                    <select
                      name="quantity"
                      style={{ width: "100px" }}
                      className="px-2 rounded"
                    >
                      <option selected={product.quantity == "1"} value="1">
                        1
                      </option>
                      <option selected={product.quantity == "2"} value="2">
                        2
                      </option>
                      <option selected={product.quantity == "3"} value="3">
                        3
                      </option>
                      <option selected={product.quantity == "4"} value="4">
                        4
                      </option>
                      <option selected={product.quantity == "5"} value="5">
                        5
                      </option>
                    </select>
                  </form>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center">
        <buttton
          onClick={() => setActiveCart(false)}
          className="btn btn-outline-danger px-5"
        >
          Close
        </buttton>
      </div>
    </div>
  );
};

export default Cart;
