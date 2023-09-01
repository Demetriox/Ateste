import React, { Component } from 'react'
import nosotrosStyle from './NosotrosStyle/Nosotros.module.css';

import heroes from '../../Assets/Atrevete/Atr-Hero.jpg';
import crew from '../../Assets/Atrevete/Atr-9.jpg';
import logo from '../../Assets/Atrevete/Atr-logo.png';
import IngFeed from '../IngFeed/IngFeed';

export default class Nosotros extends Component {
    render() {
        return (
            <div className={nosotrosStyle.textoVeta}>
                <h1 className= {nosotrosStyle.tituloVeta}>
                    <div> NOSOTROS</div>
                </h1>
                <h3 className= {nosotrosStyle.titleHistoria}>
                    <div>HISTORIA</div>
                </h3>
                <div className= {nosotrosStyle.textoHistoria}>
                 <div>
                    En agosto de 2014, nació la idea entre el C. Jesús Karim Ortiz García y el C. Jesús Jaime
                    Martínez Beilis de crear un movimiento que proporcione apoyo a aquellas situaciones más
                    vulnerables. En el municipio de Hermosillo, Sonora, existen más de mil familias que habitan
                    en asentamientos de zona de riesgo, en condiciones vulnerables para contraer
                    enfermedades, desnutrición, violencia y pobreza viviendo en una baja calidad de vida. En
                    respuesta a esto hemos realizado una asociación civil, legalmente constituida, cien por
                    ciento altruista, sin fines de lucro y ajeno a cualquier partido político y gobierno.
                 </div>
                 </div>
                
                <h2 className={nosotrosStyle.tituloVeta}>
                    <img src={logo} className={nosotrosStyle.imgTitle}></img>
                </h2>
                {/* <div className={nosotrosStyle.textoSubVeta}>
                    <div> Nuestro movimiento tiene como objetivo apoyar con recursos materiales o servicios  a
                        comunidades y situaciones que lo requieran, tomando como herramienta la concientización
                        de la sociedad hacia la importancia del servicio a los más necesitados, todo esto con un
                        enfoque juvenil para crear un cambio de impacto y crecimiento a favor del mundo en el que vivimos.
                    </div>
                </div> */}
                <div className={nosotrosStyle.gridVetaInfo}>
                    <div>
                        <div>
                            <img src={heroes} className={nosotrosStyle.imgWidth}></img>
                        </div>

                        <br></br>

                    </div>

                    <div>
                        <div>
                            <img src={crew} className={nosotrosStyle.imgWidth}></img>
                        </div>

                    </div>
                </div>
                    <IngFeed></IngFeed>
            </div >
        )
    }
}
