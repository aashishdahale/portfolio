import React from "react";

function ContactMe() {
  return (
    <div>
      <div class="card ">
        <div class="card-header"></div>
        <div class="card-body">
          <h5 class="card-title text-center">Contact Form</h5>
          <form>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Name
              </label>
              <input
                type="Number"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Mobile Number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Contact Me
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
