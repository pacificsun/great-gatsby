import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import HeaderStyles from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `) // taged template literal

  return (
    <header className={HeaderStyles.header}>
      <h1>
        <Link to="/" className={HeaderStyles.title}>
          {data.site.siteMetadata.title}
        </Link>
      </h1>
      <nav>
        <ul className={HeaderStyles.navList}>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/blog"
            >
              blog
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/about"
            >
              about
            </Link>
          </li>
          <li>
            <Link
              className={HeaderStyles.navItem}
              activeClassName={HeaderStyles.activeNavItem}
              to="/contact"
            >
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
