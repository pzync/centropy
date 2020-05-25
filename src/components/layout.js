import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h1
        style={{
          marginBottom: rhythm(1.5),
          marginTop: 0,
          fontFamily: 'monospace',
          color: "#f06"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          // fontFamily: `Montserrat, sans-serif`,
          // opacity: "0.8",
          marginTop: 0,
          fontFamily: 'monospace',
          color: "#f06"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
      <footer>
        © {new Date().getFullYear()} | For any idea / feedback, reach out on 
        {` `}
        <a href="https://twitter.com/shekhargurav">twitter</a>
        {` `} or {` `}
        <a href="mailto:webmaster@example.com">email</a>
      </footer>
    </div>
  )
}

export default Layout
