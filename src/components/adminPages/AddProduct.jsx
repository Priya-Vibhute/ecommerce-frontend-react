import React from "react";
import { useForm } from "react-hook-form";
import { api } from "../../api";

function AddProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // =============================
    try {
      const response = await api.post("/products", data);
      console.log(response);
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <div class="card shadow">
            <div class="card-header text-center">
              <h3>Product Form</h3>
            </div>
            <div class="card-body">
              <form action="#" onSubmit={handleSubmit(onSubmit)}>
                {/* <!-- Name --> */}
                <div class="mb-3">
                  <label for="name" class="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="name"
                    placeholder="Enter product name"
                    {...register("name", { required: "name is required" })}
                  />

                  <small className="text-danger">
                    {errors.name && errors.name.message}
                  </small>
                </div>

                {/* <!-- Description --> */}
                <div class="mb-3">
                  <label for="description" class="form-label">
                    Description
                  </label>
                  <textarea
                    class="form-control"
                    id="description"
                    rows="4"
                    placeholder="Enter product description"
                    {...register("description", {
                      required: "description is required",
                    })}
                  ></textarea>

                  <small className="text-danger">
                    {errors.description && errors.description.message}
                  </small>
                </div>

                {/* <!-- Price --> */}
                <div class="mb-3">
                  <label for="price" class="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    placeholder="Enter price"
                    step="0.01"
                    min="0"
                    {...register("price", { required: "price is required" })}
                  />
                  <small className="text-danger">
                    {errors.price && errors.price.message}
                  </small>
                </div>

                <button type="submit" class="btn btn-primary w-100">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
