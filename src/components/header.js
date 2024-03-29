import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header class="mb-3">

    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="navlogo">
        <Link to="/">{siteTitle}</Link>
      </div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <Link className="nav-link" to="/" activeClassName="active">
              Home 
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/experiences" activeClassName="active">
              Experiences
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/technologies" activeClassName="active">
              Technologies
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/portfolio" activeClassName="active">
              Portfolio 
            </Link>
          </li>

          {
            /*
          <li class="nav-item">
            <Link className="nav-link" to="/learning" activeClassName="active">
              Learning
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/motivation" activeClassName="active">
              Motivation
            </Link>
          </li>
          <li class="nav-item">
            <Link className="nav-link" to="/sharing" activeClassName="active">
              Sharing
            </Link>
          </li>
          */
          }
        </ul>
      </div>
    </nav>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
