import React from 'react'
import './Navigation.css'

export default function Navigation() {
    return (
        <div className="navigation-wrapper">
            <nav className="navigation">
                <a href="/" className="logo">Books Reviews</a>
                <ul className="navigation-list">
                    <li><a className="active" href="/">Home</a></li>
                    <li><a href="/">Books</a></li>
                    <li><a href="#">Reviews</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contacts</a></li>
                </ul>
            </nav>
        </div>
    )
}
