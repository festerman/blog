/** @jsx jsx */
import { jsx, Themed } from "theme-ui"
import { Link } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"
import replaceSlashes from "@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes"

const NotFound = () => {
    const { basePath, tagsPath } = useMinimalBlogConfig()
  return (
    <Layout>
      <h1>404: Någon sådan sida finns inte</h1>
      <Themed.a as={Link} sx={{ variant: `links.primary` }} to={replaceSlashes(`/${basePath}/${tagsPath}`)}>
          Kolla här istället
        </Themed.a>
    </Layout>
  )
}

export default NotFound