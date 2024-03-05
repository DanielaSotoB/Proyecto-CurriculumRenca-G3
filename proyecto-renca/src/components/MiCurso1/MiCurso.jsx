import React from 'react';
import './MiCurso.css';

function MiCurso() {
    const marcarItem = (id) => {
        var checkbox = document.getElementById('item' + id);
        var listaEstudio = document.getElementById('listaEstudio');
        var listItem = listaEstudio.querySelector('[data-id="' + id + '"]');
        var progressBar = document.getElementById('progressBar');

        // Cambiar el estilo del elemento de la lista según si está marcado o no
        if (checkbox.checked) {
            listItem.classList.add('list-group-item-success');
        } else {
            listItem.classList.remove('list-group-item-success');
        }

        // Calcular el progreso y actualizar la barra de progreso
        var totalItems = listaEstudio.getElementsByTagName('li').length;
        var itemsCompletados = listaEstudio.querySelectorAll('.list-group-item-success').length;
        var progreso = (itemsCompletados / totalItems) * 100;
        progressBar.querySelector('.progress-bar').style.width = progreso + '%';
        progressBar.querySelector('.progress-bar').innerText = progreso.toFixed(2) + '% completado';

        // Mostrar mensaje de felicitaciones si todos los elementos están marcados
        if (itemsCompletados === totalItems) {
            alert('¡Felicidades! Has completado el curso exitosamente, ya puedes descargar tu Certificado.');
        }
    };

    const avanzarItem = () => {
        // Encuentra el elemento actualmente marcado
        var listaEstudio = document.getElementById('listaEstudio');
        var items = listaEstudio.getElementsByClassName('list-group-item');
        var itemMarcado;

        for (var i = 0; i < items.length; i++) {
            if (items[i].querySelector('input').checked) {
                itemMarcado = items[i];
                break;
            }
        }

        // Encuentra el siguiente elemento y marca su checkbox
        if (itemMarcado) {
            var siguienteItem = itemMarcado.nextElementSibling;
            if (siguienteItem) {
                siguienteItem.querySelector('input').click();
            } else {
                // Si no hay un siguiente elemento, podrías reiniciar desde el principio o mostrar un mensaje
                console.log('Ya has marcado todos los elementos.');
            }
        }

        // Marcar automáticamente el checkbox de "Introducción a Python"
        var checkboxIntroduccion = document.getElementById('item1');
        if (checkboxIntroduccion) {
            checkboxIntroduccion.checked = true;
            marcarItem(1); // Llamar a la función para actualizar el progreso
        }
    };

    return (
        <>
            <div className="container-cursito">
                <h1>¡Bienvenido a tu curso!</h1>
                <iframe width="560" height="500" src="https://www.youtube.com/embed/UzAHubCqyHo?si=qchVP1dZlXMVKiw1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            {/* Lista de estudio PPT */}
            <div className="container-cursito">
                <h2>Creación presentación PowerPoint</h2>

                <ul id="listaEstudio" className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="1">
                        ¿Qué es PowerPoint?
                        <input type="checkbox" className="form-check-input" id="item1" onClick={() => marcarItem(1)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="2">
                        Crear una presentación
                        <input type="checkbox" className="form-check-input" id="item2" onClick={() => marcarItem(2)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="3">
                       Agregar una diapositiva
                        <input type="checkbox" className="form-check-input" id="item3" onClick={() => marcarItem(3)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="4">
                        Agregar texto y darle formato
                        <input type="checkbox" className="form-check-input" id="item4" onClick={() => marcarItem(4)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="5">
                       Agregar imágenes y estilos
                        <input type="checkbox" className="form-check-input" id="item5" onClick={() => marcarItem(5)} />
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center" data-id="6">
                        Proyecto Final
                        <input type="checkbox" className="form-check-input" id="item6" onClick={() => marcarItem(6)} />
                    </li>
                </ul>
                <a className="btn-certificado" target="_blank" href="../Certificado/CertificadoEjemplo.pdf" download="Certificado">
                    Descargar Certificado
                </a>

                {/* Barra de progreso */}
                <div id="progressBar" className="progress">
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </div>
        </>
    );
}

export default MiCurso;
