Estructura de Archivos

```readme.md
twitter-portfolio/
├── index.html
├── css/
│   ├── main.css              # Importa todos los módulos
│   ├── variables.css         # Variables CSS
│   ├── base.css              # Reset y estilos base
│   ├── components/
│   │   ├── header.css        # Perfil y avatar
│   │   ├── buttons.css       # Todos los botones
│   │   ├── profile-info.css  # Bio, stats, detalles
│   │   ├── projects.css      # Cards de proyectos
│   │   └── footer.css        # Footer
│   └── responsive.css        # Media queries
│
├── js/
│   ├── main.js               # Punto de entrada
│   ├── components/
│   │   ├── followButton.js   # Lógica del botón seguir
│   │   └── animations.js     # Animaciones (footer links)
│   └── utils/
│       └── helpers.js        # Funciones auxiliares
│
├── images/
│   ├── profile/
│   │   └── yo.png
│   └── Github-100.png
│
├── ignoreIdeas/
│   └── ideas.txt
│
├── .vscode/
│   └── settings.json
│
└── README.md
```