/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import useSiteMetadata from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata"

const Footer = () => {
  const { author, siteTitle } = useSiteMetadata()

  return (
    <footer
      sx={{
        boxSizing: `border-box`,
        display: `flex`,
        justifyContent: `space-between`,
        mt: [1],
        color: `secondary`,
        a: {
          variant: `links.secondary`,
        },
        flexDirection: [`column`, `column`, `row`],
        variant: `dividers.top`,
      }}
    >
      <div>
        &copy; {new Date().getFullYear()} av {author}. Använd gärna uppgifterna<br/>
        men tala om var dom kom ifrån.
      </div>
      <div>
          Byggd med <Styled.a
            aria-label="Link to the GatsbyJS homepage"
            href="https://www.gatsbyjs.org/"
            >GatsbyJS</Styled.a><br/>
        <Styled.a
          aria-label="Link to the theme's GitHub repository"
          href="https://github.com/LekoArts/gatsby-themes/tree/master/themes/gatsby-theme-minimal-blog"
        >
          Theme
        </Styled.a>
        {` `}
        av
        {` `}
        <Styled.a aria-label="Link to the theme author's website" href="https://www.lekoarts.de/en">
          LekoArts
        </Styled.a>
      </div>
    </footer>
  )
}

export default Footer