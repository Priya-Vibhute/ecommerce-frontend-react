import React, { useEffect, useState } from "react";
import { api } from "../../api";

function Checkout() {
  const [cartItems, setCartItems] = useState([]);
  const [addresses, setAddresses] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);

  const getCartItems = async () => {
    try {
      const response = await api.get("/cart");
      console.log(response.data.cartItems);
      setCartItems(response.data.cartItems);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  useEffect(() => {
    getCartItems();
    getAddresses();
  }, []);

  const getTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    );
  };

  const getAddresses = async () => {
    try {
      const response = await api.get("/address");
      setAddresses(response.data);
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h1> Checkout page</h1>
      <div className="row">
        <div className="col">
          <h3>Address</h3>
          <h5>Selected Address Id :{selectedAddress}</h5>
          {addresses ? (
            addresses.map((a) => (
              <div class="form-check m-4 p-3 border border-dark">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                  id="flexRadioDefault1"
                  
                />
                <label class="form-check-label" for="flexRadioDefault1">
                  <p>
                    {a.fullName} {a.id}
                  </p>
                  <p>Phone No:{a.phoneNo}</p>
                  <p>{a.addressLine}</p>
                  <p>
                    {a.city} {a.state} {a.pincode}
                  </p>
                </label>
              </div>
            ))
          ) : (
            <p>Loading</p>
          )}
        </div>
        <div className="col">
          <h3>Product summary</h3>
          {/* summary table */}

          <table class="table table-bordered border-dark ">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
              </tr>
            </thead>
            <tbody>
              {cartItems ? (
                cartItems.map((item) => (
                  <tr>
                    <th scope="row">{item.product.name}</th>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.product.price * item.quantity}</td>
                  </tr>
                ))
              ) : (
                <p>No Products</p>
              )}
            </tbody>
            <tfoot>
              <tr>
                <h1>Total:{getTotal()}</h1>
              </tr>
            </tfoot>
          </table>

          {/* table ended */}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
