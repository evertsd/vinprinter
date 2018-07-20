import React from 'react';
import { connect } from 'react-redux';
import { Colors } from 'vinprinter-ink';
import { createSession, PrintMediaQuery } from 'Avery';

const connectSessionCreator = connect(
    () => ({}),
    { createSession }
);

const Navbar = ({ createSession }) => (
    <div className="flex sdb no-print w-100 pa3 fw6" style={{ backgroundColor: Colors.Gray.Dark }}>
        <div className="w-50" style={{ color: Colors.Gray.Lightest }}>
            Boucher Stock Tag Printer
        </div>
        <div className="w-50">
            <a className="pointer no-underline fr" onClick={() => createSession()} style={{ color: Colors.Gray.Lightest }}>
                Clear Sheet
            </a>
        </div>
    </div>
);

const EmptyNavbar = () => <React.Fragment />;

export default PrintMediaQuery(connectSessionCreator(Navbar), EmptyNavbar);
