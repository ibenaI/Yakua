# Yakua — Landing page

Blog/portfolio de Yakua, productor musical. Construido con HTML, CSS y JavaScript puro (sin frameworks ni build).

## Secciones

El orden sigue el recorrido de quien quiere contratar a Yakua: prueba social → quién es → cómo suena → qué ofrece → contacto.

| # | Sección | id | Contenido |
|---|---|---|---|
| 1 | Hero | `#inicio` | Nombre, rol y llamados a la acción |
| 2 | Trabajos realizados | `#trabajos` | Producciones para artistas reconocidos |
| 3 | Sobre mí | `#sobre-mi` | Foto, presentación, contadores y línea de tiempo del recorrido (`#recorrido`) |
| 4 | Proyectos | `#proyectos` | Lanzamientos propios (cards con portada) |
| 5 | Servicios | `#servicios` | Cards tipo producto con CTA a WhatsApp |
| 6 | Contacto | `#contacto` | CTA general a WhatsApp |

## WhatsApp en los servicios

Cada botón con el atributo `data-service="Nombre del servicio"` recibe automáticamente un link `wa.me` con un mensaje pre-cargado que menciona ese servicio. El número se configura una sola vez en `js/main.js` (`WHATSAPP_NUMBER`, solo dígitos con código de país).

Para agregar un servicio, duplicá un `<article class="service-card">` en `index.html` y cambiá el título, el texto y el `data-service`.

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
