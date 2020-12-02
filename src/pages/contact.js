import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <Layout>
      <h1>Contact</h1>
      <p>
        The best way to reach me is via{" "}
        <a href="https://twitter.com/pacific_suraj" target="_blank">
          {" "}
          {/*target="_blank" passes users to other applicaton without closing our application  */}
          @pacific_suraj
        </a>
        on twitter!
      </p>
    </Layout>
  )
}

export default ContactPage
