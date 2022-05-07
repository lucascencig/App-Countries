import react from "react";
import {Link} from "react-router-dom"
import { Routes } from "react-router-dom";
import S from '../../../client/src/styles/LandingPage.module.css';

export default function LandingPage(){
    return(

        <div className={S.mainConteinerLanding}>
            
            <h1 className={S.mainTittle}>Countries App</h1>

            <div className={S.enterButton}>
        
            <Link to={'/home'}>
                <button className={S.btnEnter}>Ingresar</button>
            </Link>
            </div>

<div className={S.mundo}>
    <div className={S.continentes}></div>
</div>
        </div>
    )
}