import React from 'react';
import './NavBar.css';

class NavBar extends React.Component{
    render(){
        return(
        <div>
            <div className="header">
                <div className="inner_header">
                <div className="logo_container">
                <h1>Austin<span>Tyler</span></h1> 
            </div>
                <ul className="navigation">
                <a href="./Index.html" ><li>Home</li></a>
                <a href="../Portfolio/Portfolio.html"><li>Portfolio</li></a>
                <a><li>Contact</li></a>
                </ul>
                </div>
            </div>
        </div>

        )
    }
}


export default NavBar;