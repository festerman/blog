/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = () => {
  return (
    <Layout>
      <h1>404: Någon sådan sida finns inte</h1>
      <h2>
        <Link to="/blog/">Kolla här istället</Link>
      </h2>
    </Layout>
  )
}

export default NotFound