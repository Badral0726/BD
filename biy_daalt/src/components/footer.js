import fb from "./fb.png";
import ig from "./ig.png";
import x from "./x.svg";
import github from "./github.png";
import React from 'react'


function Footer()
{
    return(
        <div className="footer">
            <p style={{color:"white"}}>&copy;Munkhbadral (B211900031) @ Sict, Must</p>
            <div className="social">
                <ul className="socials">
                    <li><p style={{color:"white"}}>Social accounts</p></li>
                    <li><a href="https://www.facebook.com/Badrallll"><img src={fb} alt="FaceBook" /></a></li>
                    <li><a href="https://www.instagram.com/bad_ral/"><img src={ig} alt="Instagram" /></a></li>
                    <li><a href="https://twitter.com/Badral0726"><img src={x} alt="X" style={{backgroundColor:"white",borderRadius:"10px"}}/></a></li>
                    <li><a href="https://github.com/Badral0726" ><img src={github} alt="Github" style={{backgroundColor:"white",borderRadius:"10px"}}/></a></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer