# Yakua — Landing page

Landing page de Yakua construida con HTML, CSS y JavaScript puro (sin frameworks ni build).

## Estructura

```
yakua-landing/
├── index.html      # Página principal (HTML semántico, lang="es")
├── css/
│   └── styles.css  # Estilos: variables CSS (colores, tipografía, espaciados), mobile first
├── js/
│   └── main.js     # Scripts de la página (cargado con defer)
├── img/            # Imágenes del sitio
├── .gitignore
└── README.md
```

## Convenciones

- **Mobile first**: los estilos base son para móvil; los breakpoints usan `min-width` (48em tablet, 64em desktop).
- **Variables CSS**: definidas en `:root` al inicio de `styles.css`. Usarlas en lugar de valores sueltos.
- **JS**: `main.js` se carga con `defer`, así que el DOM ya está listo cuando se ejecuta.

## Desarrollo

No requiere instalación. Abrí `index.html` en el navegador o usá un servidor local, por ejemplo la extensión Live Server de VS Code o:

```
npx serve .
```
