import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import useSwr from "swr";
import { Property } from "../interface/Property";

function App() {
  const { data, error } = useSwr("http://localhost:3004/properties", (url) => {
    return fetch(url).then((res) => res.json());
  });

  if (!data) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error</p>;
  }

  return (
    <div className="App">
      <Link to="/someprop">Some property Link</Link>

      <div className="container">
        <div className="row">
          {data?.map((element: Property, index: number) => {
            return (
              <div key={element.id} className="col-4">
                <div className="card">
                  {typeof element.thumb === "string" && (
                    <img
                      src={element.thumb as string}
                      className="card-img-top"
                      alt="..."
                    />
                  )}

                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <div dangerouslySetInnerHTML={{__html: element.excerpt}} className="card-text"></div>
                    <p className="card-text">
                      <strong>Price:</strong> 100
                    </p>

                    <a href="/properties" className="btn btn-primary">
                      Go to the property
                    </a>
                    <Link className="btn btn-primary" to={`/${element.id}`}>
                      Go to property
                    </Link>


                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
