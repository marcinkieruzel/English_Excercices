import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <section className="container">
        {/* <SingleProperty /> */}
        <div className="row">
          <div className="col-4">
            <div className="card">
              <img
                src={
                  "https://cvr.com.vn/app/uploads/2022/09/z3704931436576_211281f87c476a4322f3458b3f96453e.jpg"
                }
                className="card-img-top"
                alt="..."
              />

              <div className="card-body">
                <h5 className="card-title">Some title</h5>
                <p className="card-text">Some excerpt</p>
                <p className="card-text">
                  <strong>Price:</strong> 100
                </p>

                <a href="/properties" className="btn btn-primary">
                  Go to the property
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
