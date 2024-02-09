function marcarItem(id) {
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
        alert('¡Felicidades! Has completado el curso exitosamente.');
    }
}

function avanzarItem() {
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
}