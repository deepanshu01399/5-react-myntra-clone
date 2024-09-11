import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function BagPlaceholder() {
  return (
    <>
      <div
        className="card placeholder-glow"
        style={{ width: "64%", height: "max-Content", marginTop: "20px" }}
        aria-hidden="true"
      >
        <div className="card-body" style={{ display: "flex" }}>
          <span
            style={{ width: "130px", height: "130px", marginRight: "10px" }}
            className="placeholder"
            alt="..."
          />
          <div style={{ width: "100%" }}>
            <p className="card-text placeholder-glow">
              <span className="placeholder col-5"></span>
              <span className="placeholder col-4"></span>
              <span className="placeholder col-6"></span>
              <span className="placeholder col-8"></span>
            </p>
            <a
              href="#"
              tabindex="-1"
              className="btn btn-primary disabled placeholder col-6"
            ></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default BagPlaceholder;
