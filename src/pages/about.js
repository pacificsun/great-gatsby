import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>A Software Engineer</p>
      <p>
        <Link to="/contact">want to work with me ? reach out</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
