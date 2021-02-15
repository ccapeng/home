import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PortfolioPage = () => (
  <Layout>
    <SEO title="Portfoilio" />
    <h1>Portfolio</h1>
    <p>
      Some solutions to demostrate 
      how to move on the projects and
      what other enhancements can be achived.
    </p>
    <ul style={{ listStyle: "none"}}>
      <li>
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="h5 card-title text-dark">
          HTML document with React
        </h2>
        <p class="text-secondary">
          Put together all html documents.
        </p>
        <ul class="ml-0">
          <li class="d-inline mr-3">
            <a href="https://github.com/ccapeng/doc-react"
              target="_blank" 
              rel="noreferrer">
              github
            </a>
          </li>
          <li class="d-inline">
            <a href="https://doc-react.herokuapp.com/"
              target="_blank" 
              rel="noreferrer">
              Demo
            </a>
          </li>
        </ul>
        </div>
        </div>
      </li>
      <li>
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="h5 card-title text-dark">
          Workflow Diagram
        </h2>
        <p class="text-secondary">
          Use BPMN to create quick flowchart. 
          Each node can be easy to associate with properties or form data.
        </p>
        <ul class="ml-0">
          <li class="d-inline mr-3">
            <a href="https://github.com/ccapeng/bpmn-workflow"
              target="_blank" 
              rel="noreferrer">
              github
            </a>
          </li>
          <li class="d-inline">
            <a href="https://bpmn-workflow.herokuapp.com/"
              target="_blank" 
              rel="noreferrer">
              Demo
            </a>
          </li>
        </ul>
        </div>
        </div>
      </li>
      <li>
        <div class="card mb-3">
        <div class="card-body">
        <h2 class="h5 card-title text-dark">
          REST, GraphQL, gRPC
        </h2>
        <p class="text-secondary">
          From the battery included framework,
          create a full stack for a quick prototype demo.
        </p>
        <ul>
          <li>
            <span class="text-dark mr-1">Fullstack</span>
            <a href="https://github.com/ccapeng/bookstore"
              target="_blank" 
              rel="noreferrer">
              github
            </a>            
          </li>
        </ul>
        <p class="text-secondary mt-3">
          Then later on to move into sing page application(SPA).
        </p>
        <ul>
          <li class="d-inline mr-3">
            <span class="text-dark mr-1">REST</span>
            <a href="https://github.com/ccapeng/bookstore_openapi"
              target="_blank" 
              rel="noreferrer">
              github
            </a>
          </li>
          <li class="d-inline mr-3">
            <span class="text-dark mr-1">GraphQL</span>
            <a href="https://github.com/ccapeng/bookstore_graphql"
              target="_blank" 
              rel="noreferrer">
              github
            </a>
          </li>
          <li class="d-inline mr-3">
            <span class="text-dark mr-1">gRPC</span>
            <a href="https://github.com/ccapeng/bookstore_grpc" 
              target="_blank" 
              rel="noreferrer">
              github
            </a>
          </li>
        </ul>
        </div>
        </div>
      </li>

    </ul>

  </Layout>
)

export default PortfolioPage