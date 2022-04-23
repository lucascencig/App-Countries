import react from "react";
import {Link} from "react-router-dom"
import S from '..styles/LandingPage.module.css';

export default function LandingPage(){
    return(

        <div className={S.main-conteiner-landing}>
            <h1 className={S.main-tittle}>Countries App</h1>

            <div className={S.enter-button}>
                <button className={S.btn-enter}>Ingresar</button>
            </div>


        </div>
    )
}