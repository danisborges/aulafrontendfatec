import * as React from "react";
import { Link } from "react-router-dom";
import './header.css';

function Header() {
    return (
        <div>
            <h1>Header</h1>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
        </div>
    );
}

export default Header;