import React, { Component } from 'react'
import { Navbar as ReactNavbar, NavbarBrand } from 'reactstrap'

class Navbar extends Component {
  render() {
    return (
      <ReactNavbar className="no-print" color="faded" fixed="top">
        <NavbarBrand href="index.html">Home</NavbarBrand>
      </ReactNavbar>
    )
  }
}

export default Navbar
