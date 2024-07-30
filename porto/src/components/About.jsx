import React from "react";
import "../componentsCss/About.css";

export default function About() {
  return (
    <div>
      <div className="card text-center">
        <div className="card-header">About</div>
        <div className="card-body">
          <h5 className="card-title">Aashish Shishirkant Dahale</h5>
          <p className="card-text">
            PG Diploma holder in Advanced Computing from the Centre for
            Development of Advanced Computing (CDAC). Strong foundation in Java
            and React development, with skills in Java, SQL, HTML, CSS,
            JavaScript, Springboot and React. Proficient in developing
            interactive and user-friendly web applications using React, with a
            solid understanding of state management, component lifecycle, and
            performance optimization through React libraries and tools.
          </p>
          <a
            href="https://www.linkedin.com/in/aashishdahale"
            className="btn btn-primary mybtn"
          >
            linkedIn
          </a>
          <a
            href="https://www.linkedin.com/in/aashishdahale"
            className="btn btn-primary mybtn"
          >
            Github
          </a>
          <a
            href="mailto=dahale22@gmail.com?"
            className="btn btn-primary mybtn"
          >
            Email
          </a>
        </div>
        <div className="card-footer text-body-secondary ">2 days ago</div>
      </div>
    </div>
  );
}
