import React, { Component } from 'react'
import mobiliarioStyle from './MobiliarioStyle/Mobiliario.module.css';
import BarraFiltro from './BarraFiltro';
import IngFeed from '../IngFeed/IngFeed';

export default class Proyectos extends Component {
    render() {
        return (
            <div className={mobiliarioStyle.styleNavSpace}>
                <h3 className={mobiliarioStyle.mobiliarioText}>
                    EVENTOS
                </h3>
              

                <BarraFiltro></BarraFiltro>
                <IngFeed></IngFeed>
            </div>
        )
    }
}
