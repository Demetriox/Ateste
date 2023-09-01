import React, { Component } from 'react'
import ingStyle from './IngFeedStyle/IngFeed.module.css';

import fireDb from '../../firebase-config';

export default class IngFeed extends Component {

    state = {
        productos: null
    }

    componentDidMount() {
        fireDb.firestore().collection("Instagram")
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
            <div className={ingStyle.contenedorIngFeed}>
                <div>FUNDACION ATREVETE</div>
            </div>
        )
    }
}
