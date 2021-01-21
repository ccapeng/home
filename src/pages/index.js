import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

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

    <p class="mt-3">I was a teacher and “developer”.</p>

    <p>
    I dreamed of splitting my legs in yoga class, 
    riding my Megavalanche mountain bike, 
    and teaching React class in college.
    </p>

    <div class="mt-5 mb-5">
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

  <div class="mt-5">
    <div class="container pt-5 pb-5">
      <p> ...Join Palm, ...Peace </p>
      <p>alex at ccapeng@gmail.com</p>
    </div>
  </div>
  </Layout>
)

export default IndexPage
