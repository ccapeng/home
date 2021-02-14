import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faReact} from '@fortawesome/free-brands-svg-icons'
import {faSmileWink, faBiking} from '@fortawesome/free-solid-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
    <div style={{ 
      maxWidth: `100%`, 
      marginBottom: `1.45rem` 
    }}>
      <Image name="boat.png" alt="Boat"/>
    </div>

    <p class="mt-3">I was a mentor and “developer”.</p>

    <p>
    I dreamed of splitting my legs in yoga class, 
    riding my Megavalanche mountain bike, and teaching React class.
    </p>

    <div class="mt-3 mb-3">
      <div class="d-flex justify-content-center">

        <FontAwesomeIcon icon={faSmileWink} size="5x" style={{
          color: `#7c8fae`,
          marginRight: `20%`
        }} />
        <FontAwesomeIcon icon={faBiking} size="5x" style={{
          color: `#e2c165`,
          transform: `rotate(15deg)`,
          marginTop: `-10px`,
          marginRight: `20%`
        }} />
        <FontAwesomeIcon icon={faReact} size="5x" style={{
          color: `#e7414f`
        }} />

      </div>
    </div>

    <h3 class="mt-5 mb-2">Fun Fact</h3>
    <ul>
      <li>Hiking</li>
      <li>Simple nature expression</li>
      <li>Ladybug squad</li>
    </ul>
    <h3 class="mt-5 mb-2">Professional</h3>
    <ul class="d-inline">
      <li class="d-inline mr-3">
        <Link to="/experiences">
          Experiences
        </Link>
      </li>
      <li class="d-inline mr-3">
        <Link to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li class="d-inline mr-3">
        <Link to="/learning">
          Learning
        </Link>
      </li>
      <li class="d-inline mr-3">
        <Link to="/motivation">
          Motivation
        </Link>
      </li>
      <li class="d-inline mr-3">
        <Link to="/sharing">
          Sharing
        </Link>
      </li>
    </ul>

  </Layout>
)

export default IndexPage