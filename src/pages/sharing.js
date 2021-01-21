import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SharingPage = () => (
  <Layout>
    <SEO title="Sharing" />
    <h1>Sharing</h1>
    <p>
      With years of experiences, 
      I have put all my best programming practices into a guidance: 
      <br/>
      <a href="https://ccapeng.gitbook.io/programming/">https://ccapeng.gitbook.io/programming/</a>
      <br/>
      Welcome to any comments and share it.
    </p>
    <p>
      Another designing philosophy to share, it’s in my bookstore project:
      <br/>
      <a href="https://ccapeng.gitbook.io/bookstores/">https://ccapeng.gitbook.io/bookstores/</a>
      <br/>
      <ul>
        <li>
          There are some tech stacks of web developments. For example, REST, GraphQL, gRPC
        </li>
        <li>
          Comparsions and diferences.
        </li>
        <li>
          How to migrate between different techs?
        </li>

      </ul>
    </p>

  </Layout>
)

export default SharingPage