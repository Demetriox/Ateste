import React, { Component } from 'react';
import fireDb from '../../firebase-config';
import styleBarraFiltro from './MobiliarioStyle/BarraFiltro.module.css';
import { BoxLoading } from 'react-loadingg';

export default class Eventos extends Component {

    state = {
        eventoAtrevete: [],
        anotherBool: false,
    }


    componentDidMount() {
        fireDb.firestore().collection("atrevete")
            .get()
            .then(snapshot => {
                const eventoAtrevete = []
                console.log(snapshot);
                snapshot.forEach(doc => {
                    const data = doc.data()
                    eventoAtrevete.push(data)
                })
                this.setState({ eventoAtrevete: eventoAtrevete, anotherBool: true })
            })
            .catch(error => console.log(error))
    }



    render() {

        return (

            this.state.anotherBool === true ?
                this.state.eventoAtrevete.map(evento => {
                    return (
                        <li>
                            <div href="" className={styleBarraFiltro.card}>
                                <img src={evento.imagen} className={styleBarraFiltro.card__image} alt="" />
                                <div className={styleBarraFiltro.card__overlay}>
                                    <div className={styleBarraFiltro.card__header}>
                                        <div className={styleBarraFiltro.card__thumb} style={{ backgroundColor: evento.color }}> </div>
                                        <div className={styleBarraFiltro.card__header} className={styleBarraFiltro.text}>
                                            <h3 className={styleBarraFiltro.card__title}>{evento.nombre}</h3>
                                            <h3 className={styleBarraFiltro.card__direction}>{evento.lugar}</h3>
                                            <span className={styleBarraFiltro.card__status}>{evento.fecha.toDate().toDateString()}</span>
                                        </div>
                                    </div>
                                    <p className={styleBarraFiltro.card__description}>{evento.descripcion}</p>
                                </div>
                            </div>
                        </li>
                    )
                }) : <div className={styleBarraFiltro.generalProyecto}>
                    <div className={styleBarraFiltro.loadingBox}>
                        <BoxLoading />
                    </div>
                </div>



        )



    }
}
