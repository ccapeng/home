import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const LearningPage = () => (
  <Layout>
    <SEO title="Learning" />
    <h1>Learning</h1>
    <p>
      Learning is just part of my life. In the schools, I read books and received knowledge from teacher. Now, I am learning from my life and receiving knowledge from my senses. My routine is pretty much cycle like this:
    </p>
    <div class="mb-5">
        <div class="d-flex justify-content-center">
          <div style={{ 
            maxWidth: `300px`, 
            marginBottom: `1.45rem` 
          }}>
            <Image name="life.svg" alt="Life > Develop > Work > Focus > Life"/>
          </div>
        </div>
    </div>

  </Layout>
)

export default LearningPage