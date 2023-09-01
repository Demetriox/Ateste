import React, { Component } from 'react'
import proyectoStyle from './ProyectosStyle/Proyecto.module.css';
import Gallery from "react-photo-gallery";
import fireDb from '../../firebase-config';
import { BoxLoading } from 'react-loadingg';

export default class Galeria extends Component {



    state = {
        images: [],
        anotherBool: false,
    }

    async componentWillMount() {
        this.fetchImages()
    }

    async fetchImages() {
        let img = []
        let promises = await fireDb.storage().ref()
            .child('/PROYECTOS')
            .listAll()
            .then(result => result.items.map(async (proyecto) => proyecto.getDownloadURL().then(url => url)))
        await Promise.all(promises).then(async results => {
            results.map(async url =>
                img.push(({
                    src: url.toString(),
                    width: 6,
                    height: 4
                })))
        });
        this.setState({ images: img, anotherBool: true })
    }

    render() {
        return this.state.anotherBool ?
            (
                <div className={proyectoStyle.generalProyecto}>
                    <h3 className={proyectoStyle.titulo}>GALERÍA</h3>
                    <div className={proyectoStyle.cuentanos}>
                    </div>
                    <Gallery photos={this.state.images} />
                </div>
            ) : (
                <div className={proyectoStyle.generalProyecto}>
                    <div className={proyectoStyle.loadingBox}>
                        <BoxLoading />
                    </div>
                </div>
            )
    }
}
