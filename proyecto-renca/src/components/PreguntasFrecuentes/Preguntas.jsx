import React, { useEffect } from 'react';
import './Preguntas.css';

const PreguntasFrecuentes = () => {
  useEffect(() => {
    const question = document.querySelectorAll('.question');
    const btnDropdown = document.querySelectorAll('.question .more');
    const answer = document.querySelectorAll('.answer');
    const parrafo = document.querySelectorAll('.answer p');

    for (let i = 0; i < btnDropdown.length; i++) {
      let altoParrafo = parrafo[i].clientHeight;
      let switchc = 0;

      btnDropdown[i].addEventListener('click', () => {
        if (switchc === 0) {
          answer[i].style.height = `${altoParrafo}px`;
          question[i].style.marginBottom = '10px';
          btnDropdown[i].innerHTML = '<i>-</i>';
          switchc++;
        } else if (switchc === 1) {
          answer[i].style.height = '0';
          question[i].style.marginBottom = '0';
          btnDropdown[i].innerHTML = '<i>+</i>';
          switchc--;
        }
      });
    }
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="container-faq">
          <div className="title-faq">
            <h1>Preguntas Frecuentes</h1>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Cómo puedo inscribirme en un curso en su plataforma de e-learning? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Para inscribirte en un curso, simplemente sigue estos pasos: <br /> <br />
                1. Navega a la página del curso que te interesa. <br />
                2. Haz clic en el botón de "Registrarse". <br />
                3. Completa el prceso de registro. <br />
                4. Una vez completado, tendrás acceso inmediato al contenido del curso <span>R</span>
              </p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Son gratuitos los cursos en su plataforma de e-learning? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>¡Sí!, la inscripción en nuestros cursos gratuitos es sencilla. Después de crear tu cuenta, simplemente navega por nuestra plataforma, elige el curso que te interese y haz clic en "Registrarse". <br />
                ¡Ya estarás listo para empezar tu aprendizaje! <span>R</span>
              </p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Cuáles son los requisitos para acceder a sus cursos gratuitos de tecnología? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis! <span>A</span></p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Los cursos gratuitos incluyen certificados de finalización? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis! <span>A</span></p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Hay límites de tiempo para completar los cursos? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis! <span>A</span></p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Qué temas y tecnologías abarcan sus cursos? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis! <span>A</span></p>
            </div>
          </div>

          <div className="item-faq">
            <div className="question">
              <h3>¿Los cursos ofrecen soporte técnico o foros de discusión? <span> P </span></h3>
              <div className="more"><i>+</i></div>
            </div>
            <div className="answer">
              <p>Sí, proporcionamos soporte técnico para ayudarte con cualquier problema relacionado con la plataforma. Además, muchos cursos gratuitos tienen foros de discusión donde puedes interactuar con otros estudiantes y profesores para resolver dudas y compartir experiencias. <span>R</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
