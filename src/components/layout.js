import React from 'react'
import PropTypes from 'prop-types'
import './layout.css'
import Helmet from 'react-helmet'

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
    </Helmet>
    {children}
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout