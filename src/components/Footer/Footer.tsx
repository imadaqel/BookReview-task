import React from "react";
import "./Footer.css";

function Footer() {
    const navigationElements=['Home','Books','Reviews','News']
    const categoryElements=['Art','Books','Bussiness','Chick','Children','Christian',
        "Classics",'Comics','Contemporary','CookBooks','Crime',"Ebooks",'Fantasy',
        'Fiction','Gay and Lesbian','Graphics Novels','Historical Fiction',
        'History','Horror','Humor','Manga',"Memoir","Music"]
    const followElements=['Facebook','Twitter','RSS']
 
    return (
        <footer className="footer">
            <ul>
                <li className="footer-section">
                    <h2>NAVIGATION</h2>
                    <ul className="footer-nav">             
                    {navigationElements.map((ele:any) =>
                        <li key={ele}>
                            <a href="#">{ele}</a>
                        </li>
                        )}
                    </ul>
                </li>
                <li className="footer-section footer-section_expanded">
                    <h2>Catagories</h2>
                    <ul className="footer-nav">
                    {categoryElements.map((ele:any) =>
                        <li key={ele}>
                            <a href="#">{ele}</a>
                        </li>
                        )}
                    </ul>
                </li>
                <li className="footer-section">
                    <h2>FOLLOW US</h2>
                    <ul className="footer-nav">
                    {followElements.map((ele:any) =>
                        <li key={ele}>
                            <a href="#">{ele}</a>
                        </li>
                        )}
                   </ul>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;