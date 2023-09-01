import React, { Component } from 'react'

import inicioStyle from './inicioStyle/Inicio.module.css';
// import niña from '../../Assets/Atrevete/kidcartel.jpg';
import fireDb from '../../firebase-config';
import AtreveteVideo from '../../Assets/Atrevete/A-Vid.mp4';
import vision from './../../Assets/Icons/vision_white_36dp.svg';
import valores from './../../Assets/Icons/valores_white_36dp.svg';
import mision from './../../Assets/Icons/mision_white_36dp.svg';
import logo from '../../Assets/Atrevete/Atr-logo.png';
// var arregloImagenes = [



// ];
export default class Inicio extends Component {

  state = {
    productos: null
  }

  componentWillMount() {
    fireDb.firestore().collection("Vetataller")
      .get()
      .then(snapshot => {
        const productos = []
        snapshot.forEach(doc => {
          const data = doc.data()
          productos.push(data)
        })
        this.setState({ productos: productos })
      })
      .catch(error => console.log(error))
  }


  render() {
    return (
      <div className={inicioStyle.contentwrapper}>

        <div className={inicioStyle.content}>
          <video id="player" src={AtreveteVideo} controls="true" autoplay="true" loop="true"></video>
        </div>
        <div className={inicioStyle.container2}>
          <div className={inicioStyle.centerObjetivo}>
            <div className={inicioStyle.card2}>


              <h2><p></p></h2>
            </div>

          </div>
        </div>
        <img className={inicioStyle.imgAtrevete} src={logo} alt="atrevete logo" />


        {/* Mision vision y valores */}
        <div className={inicioStyle.container1}>
          {/* <img src="img_avatar.png" alt="Avatar" style="width:100%"> */}
          <div className={inicioStyle.card1}>
            <img src={mision} className={inicioStyle.imgMision}></img>
            <h4><b>MISIÓN</b></h4>
            <p className={inicioStyle.sepText}>Apoyar con recursos materiales o
              servicios a comunidades y
              situaciones que lo requieran,
              tomando como herramienta la
              concientización de la sociedad hacia
              la importancia del servicio a los más
              necesitados, todo esto con un
              enfoque juvenil para crear un
              cambio de impacto y crecimiento a
              favor del mundo en el que vivimos.</p>
          </div>
          <div className={inicioStyle.card1}>
            <img src={vision} className={inicioStyle.imgVision}></img>
            <h4><b>VISIÓN</b></h4>
            <p className={inicioStyle.sepText}>Crear un cambio a favor de los más
              necesitados, logrando mejorar la
              calidad de vida de las comunidades
              con situaciones menos favorecidas
              del estado de Sonora, así como
              también cambiar nuestra cultura de
              ayuda hacia las demás personas.</p>
          </div>
          <div className={inicioStyle.card1}>
            <img src={valores} className={inicioStyle.imgValores}></img>
            <h4><b>VALORES</b></h4>
            <p className={inicioStyle.sepText}>
              <ol> <div>Compromiso</div>
                <div>Alegría</div>
                <div>Solidaridad</div>
                <div>Empatía</div>
              </ol>
            </p>
          </div>
        </div>

        <div className={inicioStyle.divicionLine}></div>
        <div className={inicioStyle.queHacemos}>Nuestro trabajo es a través de cuatro sectores:
          <hr></hr>
        </div>



        {/* Dibujitos Seccion */}

        <main className={inicioStyle.pagecontent}>
          <div className={inicioStyle.card}>
            <div className={inicioStyle.content}>
              <h2 className={inicioStyle.title}>SALUD</h2>

            </div>
          </div>
          <div className={inicioStyle.card}>
            <div className={inicioStyle.content}>
              <h2 className={inicioStyle.title}>SUSTENTO</h2>

            </div>
          </div>
          <div className={inicioStyle.card}>
            <div className={inicioStyle.content}>
              <h2 className={inicioStyle.title}>CAPACITACIÓN</h2>

            </div>
          </div>
          <div className={inicioStyle.card}>
            <div className={inicioStyle.content}>
              <h2 className={inicioStyle.title}>CONCIENTIZACIÓN</h2>

            </div>
          </div>


        </main>
        <hr></hr>





        <div>
        </div>
      </div>
    )
  }
}
