import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children, primaryColour }) => {
  return (
    <>
      <Navbar primaryColour={primaryColour} />
      {children}
      <Footer primaryColour={primaryColour} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
