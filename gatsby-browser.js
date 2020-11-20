// copied from https://github.com/ChristopherBiscardi/gatsby-mdx/issues/354#issuecomment-482693692
import React from "react"
import { MDXProvider } from "@mdx-js/react"

const components = {
	wrapper: ({children}) => <>{children}</>
}
export const wrapRootElement = ({ element }) => {
  return (
    <MDXProvider components={components}>
      {element}
    </MDXProvider>
  )
}