import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <footer className="footer">
            <ul>
                <li className="footer__section">
                    <h2>NAVIGATION</h2>
                    <ul className="footer__nav">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Books</a>
                        </li>

                        <li>
                            <a href="#">Books</a>
                        </li>
                        <li>
                            <a href="#">News</a>
                        </li>
                    </ul>
                </li>
                <li className="footer__section footer__section_expanded">
                    <h2>Catagories</h2>
                    <ul className="footer__nav">
                        <li>
                            <a href="#">Art</a>
                        </li>

                        <li>
                            <a href="#">Biography</a>
                        </li>

                        <li>
                            <a href="#">Bussiness</a>
                        </li>

                        <li>
                            <a href="#">Chick</a>
                        </li>

                        <li>
                            <a href="#">Children</a>
                        </li>

                        <li>
                            <a href="#">Christian</a>
                        </li>
                        <li>
                            <a href="#">Classics</a>
                        </li>
                        <li>
                            <a href="#">Comics</a>
                        </li>
                        <li>
                            <a href="#">Contemporary</a>
                        </li>
                        <li>
                            <a href="#">CookBooks</a>
                        </li>
                        <li>
                            <a href="#">Crime</a>
                        </li>
                        <li>
                            <a href="#">Ebooks</a>
                        </li>
                        <li>
                            <a href="#">Fantasy</a>
                        </li>
                        <li>
                            <a href="#">Fiction</a>
                        </li>
                        <li>
                            <a href="#">Gay and Lesbian</a>
                        </li>
                        <li>
                            <a href="#">Graphics Novels</a>
                        </li>
                        <li>
                            <a href="#">Historical Fiction</a>
                        </li>
                        <li>
                            <a href="#">History</a>
                        </li>
                        <li>
                            <a href="#">Horror</a>
                        </li>
                        <li>
                            <a href="#">Humor</a>
                        </li>
                        <li>
                            <a href="#">Manga</a>
                        </li>
                        <li>
                            <a href="#">Memoir</a>
                        </li>
                        <li>
                            <a href="#">Music</a>
                        </li>
                    </ul>
                </li>
                <li className="footer__section">
                    <h2>FOLLOW US</h2>
                    <ul className="footer__nav">
                        <li>
                            <a href="#">Facebook</a>
                        </li>

                        <li>
                            <a href="#">Twitter</a>
                        </li>

                        <li>
                            <a href="#">RSS</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;