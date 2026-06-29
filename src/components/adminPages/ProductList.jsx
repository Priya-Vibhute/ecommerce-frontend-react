import React, { useEffect, useState } from "react";
import { api } from "../../api";

function ProductList() {
  const [products, setProducts] = useState(null);

  // To fetch products
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // delete product
  const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    fetchProducts();
    alert("Product deleted");
  };

  return (
    <div>
      <h2>Total Products :{products && products.length}</h2>
      {products ? (
        <div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">description</th>
                <th scope="col">price</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p) => (
                <tr>
                  <th scope="row">{p.id}</th>
                  <td>{p.name}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>
                    <button className="btn btn-success m-2">Update</button>
                    <button
                      className="btn btn-danger m-2"
                      onClick={() => deleteProduct(p.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading......</p>
      )}
    </div>
  );
}

export default ProductList;
