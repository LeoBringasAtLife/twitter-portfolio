/* COMPONENTE: Botón Seguir */

export class FollowButton {
  constructor(buttonId) {
    this.button = document.getElementById(buttonId);
    this.isFollowing = false;
    this.init();
  }

  init() {
    if (!this.button) {
      console.error('Botón de seguir no encontrado');
      return;
    }

    // Cargar estado guardado
    this.loadState();

    // Event listener
    this.button.addEventListener('click', () => this.toggle());

    console.log('Botón de seguir inicializo');
  }

  toggle() {
    this.isFollowing = !this.isFollowing;
    this.updateUI();
    this.saveState();

    // Feedback en consola
    console.log(
      this.isFollowing 
        ? 'Empezaste a seguir a Leonardo' 
        : 'Dejaste de seguir a Leonardo'
    );
  }

  updateUI() {
    if (this.isFollowing) {
      this.button.textContent = 'Siguiendo';
      this.button.classList.add('following');
    } else {
      this.button.textContent = 'Seguir';
      this.button.classList.remove('following');
    }
  }

  saveState() {
    try {
      localStorage.setItem('leobringas_following', this.isFollowing);
    } catch (error) {
      console.warn('No se pudo guardar el estado:', error);
    }
  }

  loadState() {
    try {
      const saved = localStorage.getItem('leobringas_following');
      if (saved !== null) {
        this.isFollowing = saved === 'true';
        this.updateUI();
      }
    } catch (error) {
      console.warn('No se pudo cargar el estado:', error);
    }
  }
}