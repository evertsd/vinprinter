import React from 'react';
import { Colors } from 'vinprinter-ink';
import PrintMediaQuery from 'hoc/PrintMediaQuery';

const Navbar = () => (
    <div className="db no-print w-100 pa3 fw6" style={{ backgroundColor: Colors.Gray.Dark }}>
        <a className="no-underline" href="index.html" style={{ color: Colors.Gray.Lightest }}>
            Home
        </a>
    </div>
);

const EmptyNavbar = () => <React.Fragment />;

export default PrintMediaQuery(Navbar, EmptyNavbar);
