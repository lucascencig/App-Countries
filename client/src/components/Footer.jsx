import React  from "react";
import S from '../../../client/src/styles/Footer.module.css'

export default function Footer(){
    return(
        <div className={S.contenedorFooter}>
            <ul>
                <li><a href="https://www.linkedin.com/in/lucas-cencig-aa4a001b6/" target="_blank">LinkedIn</a></li>
                <p>Lucas Cencig</p>
                <li><a href="https://github.com/lucascencig?tab=repositories" target="_blank">GitHub</a></li>
                    
            </ul>
           
        </div>
    )
}