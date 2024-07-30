import React from "react";

function Certifications() {
  return (
    <div>
      <div class="card-group">
        <div class="card">
          <img
            src="src\components\images\udemyjava.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">CDAC</h5>
            <p class="card-text">
              900-hour full time post Graduate Diploma course
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">MAR|2023</small>
          </div>
        </div>
        <div class="card">
          <img
            src="src\components\images\udemywebdev.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">UDEMY</h5>
            <p class="card-text">The Complete 2024 Web Development Bootcamp</p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">MAR|2024</small>
          </div>
        </div>
        <div class="card">
          <img
            src="src\components\images\udemyjava.jpg"
            class="card-img-top"
            alt="javaCertificate"
          />
          <div class="card-body">
            <h5 class="card-title">UDEMY</h5>
            <p class="card-text">
              Full Stack Java developer - Java + JSP + Spring Restful + JS
            </p>
          </div>
          <div class="card-footer">
            <small class="text-body-secondary">MAR|2024</small>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
