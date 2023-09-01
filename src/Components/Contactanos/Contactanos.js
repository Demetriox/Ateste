import React, { Component } from 'react'
import emailjs from '@emailjs/browser';
import contactanosStyle from './ContactanosStyle/Contactanos.module.css';


export default class Contactanos extends Component {

    render() {

        document.addEventListener("DOMContentLoaded", function () {
            // your code here
            const btn = document.getElementById("button");

            if (btn) {
                document.getElementById("form").addEventListener("submit", function (event) {
                    event.preventDefault();
                    btn.value = "Sending...";
                    emailjs.sendForm("service_d30033t", "template_yfbeqdq", this, "1x40A2mYk_IsLtEHG").then(
                        () => {
                            console.log("GOT HEEEEER")
                            btn.value = "Send Email";
                            alert("Sent!");
                            document.querySelector("#from_name").value = "";
                            document.querySelector("#to_name").value = "Atrevete Team";
                            document.querySelector("#message").value = "";
                            document.querySelector("#reply_to").value = "Atrevete";
                            document.querySelector("#phone_number").value = "";
                            document.querySelector("#mail").value = "";
                        },
                        (err) => {
                            btn.value = "Send Email";
                            alert(JSON.stringify(err));
                        }
                    );
                });
            }


        });
        return (
            <div className={contactanosStyle.generalProyecto}>
                <div className={contactanosStyle.titulo}>Contactanos</div>
                <form id="form">
                    <div class="field">
                        <label className={contactanosStyle.namefield} for="from_name">Nombre: </label>
                        <input type="text" name="from_name" id="from_name" required />
                    </div>
                    <div class="field">
                        <label className={contactanosStyle.namefield} for="message">Mensaje: </label>
                        <textarea maxlength="60" type="text" name="message" id="message" required />
                    </div>

                    <div class="field">
                        <label className={contactanosStyle.namefield} for="phone_number">Numero de telefono: </label>
                        <input type="text" name="phone_number" id="phone_number" required />
                    </div>
                    <div class="field">
                        <label className={contactanosStyle.namefield} for="mail">E-mail: </label>
                        <input type="text" name="mail" id="mail" required />
                    </div>
                    <br></br>
                    <input className={contactanosStyle.buttonClass} type="submit" id="button" value="Enviar"></input>
                </form>
            </div>

        )
    }
}
