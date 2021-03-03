 import React from 'react';
 import './Footer.css';

 class Footer extends React.Component{
     render(){
         return(
            <footer>
                <div className="iconContainer">  
            
                   <div className="icons">
                       <img src="https://img.icons8.com/color/96/000000/html-5.png"/>
                       <h3>HTML5</h3>
                   </div>    
                   <div className="icons">        
                       <img src="https://img.icons8.com/color/96/000000/css3.png"/>
                       <h3>CSS3</h3>
                   </div>

                   <div className="icons">    
                       <img src="https://img.icons8.com/color/96/000000/javascript-logo-1.png"/>
                       <h3>JavaScript</h3>
                   </div>
                   <div className="icons">    
                   <img src="https://img.icons8.com/plasticine/100/000000/react.png"/>
                       <h3>React</h3>
                   </div>
            
                   <div className="iconsRight">
                       <a href="https://www.linkedin.com/in/austin-tyler-75401b123/" target="_blank">
                       <img src="https://img.icons8.com/nolan/96/linkedin.png"/>
                       </a>
                   </div>

                   <div className="iconsRight">
                       <a href = "mailto: AustinTyler221@gmail.com" target="_blank">
                       <img src="https://img.icons8.com/nolan/96/email.png"/>
                       </a>
                   </div>
            
                   <div className="iconsRight">
                       <a href="https://github.com/AT221?tab=projects" target="_blank">
                       <img src="https://img.icons8.com/nolan/128/github.png"/>
                       </a>
                   </div>
                </div>
            </footer>
         )
     }
 }


 export default Footer;