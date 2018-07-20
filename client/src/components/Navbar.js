import React from 'react';
import { connect } from 'react-redux';
import { Colors } from 'vinprinter-ink';
import { createSession, PrintMediaQuery } from 'Avery';

const connectSessionCreator = connect(
    () => ({}),
    { createSession }
);

const Navbar = ({ createSession }) => (
    <div className="flex sdb no-print w-100 fw4 f4" style={{ backgroundColor: Colors.Gray.Dark }}>
        <div className="w-50 f3 pa3 ml2" style={{ color: Colors.Gray.Lightest }}>
            Boucher Stock Tag Printer
        </div>
        <div className="w-50 pa2 mr3">
            <a className="pa2 ba pointer no-underline fr" onClick={() => createSession()} style={{ color: Colors.Gray.Lightest, borderRadius: '2px' }}>
                Clear Sheet
            </a>
        </div>
    </div>
);

const EmptyNavbar = () => <React.Fragment />;

export default PrintMediaQuery(connectSessionCreator(Navbar), EmptyNavbar);
