import React from 'react'
import { Colors } from 'vinprinter-ink';

const Navbar = () => (
    <navbar className="db no-print w-100 pa3 fw6" style={{ backgroundColor: Colors.Gray.Dark }}>
        <a className="no-underline" href="index.html" style={{ color: Colors.Gray.Lightest }}>Home</a>
    </navbar>
)

export default Navbar
