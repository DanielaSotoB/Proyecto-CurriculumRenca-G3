function enviarComentario() {
    var commentText = document.getElementById('comment').value;
    var ratingValue = document.getElementById('rating').value;

    // Validar si el comentario está vacío
    if (commentText.trim() === '') {
        alert('Por favor, ingresa un comentario.');
        return;
    }

    // Crear nuevo elemento de comentario
    var commentItem = document.createElement('li');
    commentItem.className = 'list-group-item';
    commentItem.innerHTML = '<strong>Calificación:</strong> ' + ratingValue + ' estrellas<br><strong>Comentario:</strong> ' + commentText;

    // Agregar el comentario al historial
    var commentHistory = document.getElementById('commentHistory');
    commentHistory.appendChild(commentItem);

    // Limpiar el formulario
    document.getElementById('commentForm').reset();

    
}

function limitarCaracteres() {
    var commentTextarea = document.getElementById('comment');
    var charCount = document.getElementById('charCount');
    var maxLength = 20;

    var currentLength = commentTextarea.value.length;

    if (currentLength > maxLength) {
        commentTextarea.value = commentTextarea.value.substring(0, maxLength);
        currentLength = maxLength;
    }

    charCount.textContent = currentLength + '/' + maxLength + ' caracteres';
} function limitarCaracteres() {
    var commentTextarea = document.getElementById('comment');
    var charCount = document.getElementById('charCount');
    var maxLength = 20;

    var currentLength = commentTextarea.value.length;

    if (currentLength > maxLength) {
        commentTextarea.value = commentTextarea.value.substring(0, maxLength);
        currentLength = maxLength;
    }

    charCount.textContent = currentLength + '/' + maxLength + ' caracteres';
}