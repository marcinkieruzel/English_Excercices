import React, { useContext } from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {

  return (
    <main>
      <header>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              Navbar
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/property/83576">Default Property</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      {children}
    </main>
  );
};

export default Layout;
