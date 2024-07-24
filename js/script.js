document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Obtener la calificación y el comentario
    const rating = document.querySelector('input[name="rating"]:checked').value;
    const comment = document.getElementById('comment').value;
    
    // Crear el contenedor del comentario
    const commentContainer = document.createElement('div');
    commentContainer.classList.add('comment');
    
    // Crear el elemento de la calificación
    const ratingElement = document.createElement('div');
    ratingElement.classList.add('rating-display');
    for (let i = 0; i < rating; i++) {
        ratingElement.innerHTML += '★';
    }
    for (let i = rating; i < 5; i++) {
        ratingElement.innerHTML += '☆';
    }
    
    // Crear el elemento del comentario
    const commentElement = document.createElement('p');
    commentElement.textContent = comment;
    
    // Añadir los elementos al contenedor del comentario
    commentContainer.appendChild(ratingElement);
    commentContainer.appendChild(commentElement);
    
    // Añadir el contenedor del comentario a la sección de comentarios
    document.getElementById('comments-display').appendChild(commentContainer);
    
    // Resetear el formulario
    document.getElementById('review-form').reset();
});