import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { useForm } from "react-hook-form";

function ProductList() {
  const [products, setProducts] = useState(null);
  const [productId, setProductId] = useState(null); // step 1
  const [categories, setCategories] = useState(null);

  const { handleSubmit, register, reset } = useForm();

  // To fetch products
  const fetchProducts = async () => {
    try {
      const response = await api.get("/products");
      setProducts(response.data);
    } catch (error) {
      alert("something went wrong");
    }
  };

  //  To fetch categories
  const fetchCategories = async () => {
    try {
      const response = await api.get("/categories");
      setCategories(response.data);
    } catch (error) {
      alert("something went wrong");
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  // delete product
  const deleteProduct = async (id) => {
    const response = await api.delete(`/products/${id}`);
    fetchProducts();
    alert("Product deleted");
  };

  // updateProduct

  const updateProduct = async (data) => {
    console.log(data);
    try {
      const response = await api.put(`/products/${productId}`, data);
      alert("product updated");
      fetchProducts();
    } catch (error) {}
  };

  return (
    <div>
      <h2>Total Products :{products && products.length}</h2>

      {/* update product */}

      {/* <!-- Modal --> */}
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <form action="" onSubmit={handleSubmit(updateProduct)}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    {...register("name")}
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    {...register("description")}
                  />
                </div>

                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleFormControlInput1"
                    {...register("price")}
                  />
                </div>

                <input type="submit" className="btn btn-primary m-2" />
              </form>
            </div>
          </div>
        </div>
      </div>

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
                    <button
                      className="btn btn-success m-2"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => {
                        setProductId(p.id); // step 2
                        reset({
                          name: p.name,
                          description: p.description,
                          price: p.price,
                        });
                      }}
                    >
                      Update
                    </button>
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
