import React from "react";

export default function Card() {
  return (
    <div>
      <div class="card text-bg-dark">
        <img src="src\components\images\ash.jpg" class="card-img" alt="..." />
        <div class="card-img-overlay">
          <h5 class="card-title">Hello</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <p class="card-text">
            <small>Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  );
}
