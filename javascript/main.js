document.addEventListener('DOMContentLoaded', function () {
    // Botón Seguir / Siguiendo
    const followButton = document.getElementById('followButton');
    followButton.addEventListener('click', function () {
        if (followButton.textContent === 'Seguir') {
            followButton.textContent = 'Siguiendo';
            followButton.classList.add('following');
            setTimeout(() => {
                followButton.innerHTML = 'Siguiendo';
            }, 200);
        } else {
            followButton.textContent = 'Seguir';
            followButton.classList.remove('following');
            followButton.innerHTML = 'Seguir';
        }
    });

    // Efecto hover para los proyectos
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.querySelector('img').style.transform = 'scale(1.03)';
        });
        card.addEventListener('mouseleave', () => {
            card.querySelector('img').style.transform = 'scale(1)';
        });
    });
});