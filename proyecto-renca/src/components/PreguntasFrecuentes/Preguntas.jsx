import React, { useState } from 'react';

const PreguntasFrecuentes = () => {
  const [switches, setSwitches] = useState(Array.from({ length: 7 }, () => false));

  const toggleAnswer = (index) => {
    const newSwitches = [...switches];
    newSwitches[index] = !newSwitches[index];
    setSwitches(newSwitches);
  };

  const preguntas = [
    {
      question: '¿Cómo puedo inscribirme en un curso en su plataforma de e-learning?',
      answer: 'Para inscribirte en un curso, simplemente sigue estos pasos: Navega a la página del curso que te interesa. Haz clic en el botón de "Registrarse". Completa el prceso de registro. Una vez completado, tendrás acceso inmediato al contenido del curso.',
    },
    {
      question: '¿Son gratuitos los cursos en su plataforma de e-learning?',
      answer: '¡Sí!, la inscripción en nuestros cursos gratuitos es sencilla. Después de crear tu cuenta, simplemente navega por nuestra plataforma, elige el curso que te interese y haz clic en "Registrarse". ¡Ya estarás listo para empezar tu aprendizaje!',
    },
    {
      question: '¿Cuáles son los requisitos para acceder a sus cursos gratuitos de tecnología?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis!',
    },
    {
      question: '¿Los cursos gratuitos incluyen certificados de finalización?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis!',
    },
    {
      question: '¿Hay límites de tiempo para completar los cursos?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis!',
    },
    {
      question: '¿Qué temas y tecnologías abarcan sus cursos?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus incidunt consequatur ad at labore, distinctio neque voluptate est molestiae voluptatum laudantium quae temporibus tempora! Corporis, vitae? Dolore exercitationem nulla omnis!',
    },
    {
      question: '¿Los cursos ofrecen soporte técnico o foros de discusión?',
      answer: 'Sí, proporcionamos soporte técnico para ayudarte con cualquier problema relacionado con la plataforma. Además, muchos cursos gratuitos tienen foros de discusión donde puedes interactuar con otros estudiantes y profesores para resolver dudas y compartir experiencias.',
    },
  ];

  return (
    <div className="container">
      <div className="row">
        <div className="container-faq">
          {preguntas.map((pregunta, index) => (
            <div className="item-faq" key={index}>
              <div className="question">
                <h3>
                  {pregunta.question} <span> P </span>
                </h3>
                <div className="more" onClick={() => toggleAnswer(index)}>
                  {switches[index] ? <i>-</i> : <i>+</i>}
                </div>
              </div>
              <div className="answer" style={{ height: switches[index] ? 'auto' : 0 }}>
                <p>{pregunta.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PreguntasFrecuentes;
