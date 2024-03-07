import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contacto.css';

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zw3y9i9', 'template_syiwr2c', form.current, {
        publicKey: 'i0u4q2i1TJplyG59G',
      })
      .then(
        () => {
          alert('¡Correo enviado con éxito!');
          form.current.reset(); // Restablecer el formulario
        },
        (error) => {
          alert('Error al enviar el correo. Por favor, inténtelo de nuevo.');
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <body id="cuerpo">
      <form id="formulario" ref={form} onSubmit={sendEmail}>
        <h2>Contacto</h2>
        <div className="input-group1">
          <label htmlFor="name">Nombre</label>
          <input className="input1" type="text" name="user_name" id="name" placeholder="Nombre" />

          <label htmlFor="email">Email</label>
          <input className="input1" type="text" name="user_email" id="email" placeholder="Email" />

          <label htmlFor="message">Mensaje</label>
          <textarea className='textarea1' name="message" id="message" cols="30" rows="5" placeholder="Mensaje"></textarea>

          <div className="form-text1">
            <a href="#">Política de privacidad</a>
            <a href="#">Términos y Condiciones</a>
          </div>

          <input className="btn-contact" type="submit" value="Enviar" />
        </div>
      </form>
    </body>
  );
};

export default Contacto;