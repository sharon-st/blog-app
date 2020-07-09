import React from 'react';
import "./App.css"
import { Link } from "react-router-dom"

function Nav() {
    const styleit = { color: 'white' }
    return (
        <nav>
            <ul className="nav-links">

                <Link style={styleit} to={`/`}>
                    <li>Home</li>
                </Link>

                <Link style={styleit} to={`/viewposts`}>
                    <li>Posts</li>
                </Link>

                <Link style={styleit} to={`/createpost`}>
                    <li>Create Post</li>
                </Link>

            </ul>
        </nav>
    );
}

export default Nav;