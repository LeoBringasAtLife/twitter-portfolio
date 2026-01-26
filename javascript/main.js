import { FollowButton } from './components/followButton.js';
import { Animations } from './components/animations.js';
import { daysSince } from './utils/helpers.js';

const CONFIG = {
  githubUsername: 'leobringasatlife',
  joinDate: '2024-09-01'
};

function init() {
  initComponents();
  updateDynamicInfo();
  console.log('Cargo el portfolio ✅');
}

function initComponents() {
  const followBtn = new FollowButton('followButton');
  const animations = new Animations();
}

function updateDynamicInfo() {
  const details = document.querySelectorAll('.detail');
  let joinDateElement = null;
  
  for (const detail of details) {
    if (detail.textContent.includes('Se unió')) {
      joinDateElement = detail.querySelector('span:last-child') || detail;
      break;
    }
  }

  if (joinDateElement) {
    const days = daysSince(CONFIG.joinDate);
    const months = Math.floor(days / 30);
    const years = Math.floor(days / 365);
    
    let timeText = '';
    if (years > 0) {
      timeText = `hace ${years} año${years > 1 ? 's' : ''}`;
    } else if (months > 0) {
      timeText = `hace ${months} mes${months > 1 ? 'es' : ''}`;
    } else {
      timeText = `hace ${days} día${days > 1 ? 's' : ''}`;
    }
    
    const monthYear = new Date(CONFIG.joinDate).toLocaleDateString('es-ES', { 
      month: 'long', 
      year: 'numeric' 
    });
    
    joinDateElement.innerHTML = `Se unió en ${monthYear} <span style="color: #657786; font-size: 0.85em;">(${timeText})</span>`;
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

/* Arriba, arriba, abajo, abajo, izquierda, derecha */
let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
let konamiIndex = 0;

document.addEventListener('keydown', (e) => {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      console.log('Konami Code activado! Has desbloqueado el modo desarrollador.');
      console.log('Secreto: Leonardo ama programar mientras escucha "World Champion".');
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});