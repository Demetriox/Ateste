import React, { Component } from 'react';
import styleBarraFiltro from './MobiliarioStyle/BarraFiltro.module.css';
import Eventos from './Eventos';

export default class BarraFiltro extends Component {






    render() {

        return (
            <div className={styleBarraFiltro.gridBarraFiltro}>
                <Eventos> </Eventos>
            </div>
        )



    }
}
