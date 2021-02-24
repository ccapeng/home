import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import "./index.scss"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faSmileWink, faBiking, faBook, faFolderOpen } from '@fortawesome/free-solid-svg-icons'
import { faBlogger, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
    <div style={{ 
      maxWidth: `100%`, 
      marginBottom: `1.45rem` 
    }}>
      <Image name="monster.png" alt="Nova Scotia"/>
    </div>

    <p class="mt-3">I was a mentor and “developer”.</p>

    <p>
    I dreamed of splitting my legs in yoga class, 
    riding my Megavalanche mountain bike, and teaching React class.
    </p>

    <div class="mt-3 mb-3">
      <div class="row">
        <div class="col-sm-12 col-md-4 pt-3 d-flex justify-content-center">
        <FontAwesomeIcon icon={faSmileWink} size="5x" style={{
          color: `#2a8ef4`
        }} />
        </div>
        <div class="col-sm-12 col-md-4 pt-3 d-flex justify-content-center">
        <FontAwesomeIcon icon={faBiking} size="5x" style={{
          color: `#deac78`,
          transform: `rotate(15deg)`,
          marginTop: `-10px`
        }} />
        </div>
        <div class="col-sm-12 col-md-4 pt-3 d-flex justify-content-center">
        <FontAwesomeIcon icon={faReact} size="5x" style={{
          color: `#b259b4`
        }} />
        </div>
      </div>
    </div>

    <h3 class="mt-5 mb-2">Fun Fact</h3>
    <ul class="mb-5">
      <li>Hiking</li>
      <li>Simple nature expression</li>
      <li>Ladybug squad</li>
    </ul>
    <h3 class="mt-5 mb-3">Other Sites:</h3>
    <ul>
      <li class="d-inline mr-3">
        <Link to="/portfolio"
          title="Portfolio"
        >
          <FontAwesomeIcon icon={faFolderOpen} size="3x"/>
        </Link>
      </li>
      <li class="d-inline mr-3">
        <a href="https://github.com/ccapeng/"
          target="_blank" 
          title="Github"
          rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} size="3x"/>
        </a>
      </li>
      <li class="d-inline mr-3">
        <a href="https://ccapeng.blogspot.com/"
          target="_blank" 
          title="Blog"
          rel="noreferrer">
            <FontAwesomeIcon icon={faBlogger} size="3x"/>
        </a>
      </li>
      <li class="d-inline mr-3">
        <a href="https://www.linkedin.com/in/alex-peng-48283412/"
          target="_blank" 
          title="Linkedin"
          rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} size="3x"/>
        </a>
      </li>
      <li class="d-inline">
        <a href="https://ccapeng.gitbook.io/programming"
          target="_blank" 
          title="Gitbook"
          rel="noreferrer">
            <FontAwesomeIcon icon={faBook} size="3x"/>
        </a>
      </li>
    </ul>

  </Layout>
)

export default IndexPage