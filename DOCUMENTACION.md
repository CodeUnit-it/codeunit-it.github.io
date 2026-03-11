# Documentación - CodeUnit Website

## Descripción General

Sitio web corporativo de CodeUnit, una consultora tecnológica orientada a pymes, escuelas y organizaciones. La página presenta servicios de soporte técnico, desarrollo de sistemas y capacitación en ciberseguridad.

## Estructura del Proyecto

```
CodeUnit/
├── index.html          # Página principal
├── styles.css          # Estilos y diseño responsive
├── script.js           # Funcionalidad interactiva
├── newLogo.png         # Logo de la empresa
├── images/             # Recursos visuales
│   ├── barberia.jpeg
│   ├── mecanico.jpeg
│   ├── otorrino.jpeg
│   ├── pantallazo_canchas1.jpeg
│   └── pantallazo_canchas2.jpeg
└── DOCUMENTACION.md    # Este archivo
```

## Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Diseño responsive con variables CSS y animaciones
- **JavaScript (Vanilla)**: Interactividad sin dependencias
- **Font Awesome 6.0**: Iconografía
- **Google Fonts (Poppins)**: Tipografía moderna
- **FormSubmit.co**: Servicio de envío de formularios

## Secciones de la Página

### 1. Navegación (Navbar)
- Logo de la empresa
- Menú de navegación con enlaces a todas las secciones
- Menú hamburguesa responsive para dispositivos móviles
- Botón destacado de "Contacto"
- Sticky positioning para mantener visible al hacer scroll

### 2. Hero Section (Inicio)
Presenta la propuesta de valor principal con:
- Badge identificativo: "Consultora Web · Sistemas · Ciberseguridad"
- Título principal y descripción del servicio
- Tres mini-cards destacando servicios clave:
  - Soporte Técnico
  - Desarrollo a Medida
  - Ciberseguridad

### 3. Sobre Nosotros
Layout dividido en dos columnas:
- Texto explicativo de la misión y enfoque
- Grid 2x2 con públicos objetivo:
  - Pymes
  - Escuelas
  - Organizaciones
  - Negocios

### 4. Servicios
Tres tarjetas de servicio numeradas:
1. **Soporte y Diagnóstico Técnico**
   - Análisis de sistemas
   - Detección de fallas
   - Propuesta de soluciones

2. **Desarrollo de Sistemas**
   - Aplicaciones web a medida
   - Backend: Laravel o Node.js
   - Frontend: Angular

3. **Capacitación en Ciberseguridad**
   - Concientización sobre estafas
   - Buenas prácticas de contraseñas
   - Capacitación docente

### 5. Proyectos (Portfolio)
Carrusel infinito con proyectos realizados:
- Consultorio de Otorrinolaringología (landing page)
- Barbería (landing page)
- Mecánica (landing page)
- Sistema de gestión de canchas (2 capturas)

**Funcionalidad especial**: Las imágenes con clase `zoomable-img` se pueden ampliar en modal.

### 6. Equipo
Grid responsive con tarjetas de miembros:
- Russo Matias - Desarrollador Full Stack
- Leonardo Ramos - Desarrollador Full Stack
- Angel Silva - Desarrollador Full Stack

Todos egresados de UTN - Facultad Regional Concordia.

### 7. FAQ (Preguntas Frecuentes)
Acordeón interactivo con 4 preguntas comunes:
- Tipos de servicios ofrecidos
- Requisitos técnicos del cliente
- Público objetivo
- Proceso de trabajo

### 8. Contacto
Formulario funcional con:
- Nombre completo
- Email (requerido)
- Empresa/Organización (opcional)
- Teléfono (opcional)
- Mensaje (requerido)
- Checkbox de términos y condiciones
- Integración con FormSubmit.co para envío a `Codeunit.it@gmail.com`

### 9. Footer
Tres columnas informativas:
- Descripción de la empresa y redes sociales
- Enlaces de navegación
- Información de contacto

## Funcionalidades JavaScript

### 1. Carrusel Infinito
```javascript
// Clona los elementos del carrusel para crear efecto infinito
const track = document.getElementById("track");
items.forEach((item) => {
    const clone = item.cloneNode(true);
    track.appendChild(clone);
});
```

### 2. Menú Hamburguesa
- Toggle de clase `active` en el menú móvil
- Cierre automático al hacer clic en un enlace
- Responsive para pantallas menores a 768px

### 3. Modal de Imágenes
- Abre imágenes con clase `zoomable-img` en pantalla completa
- Cierre con botón X, clic fuera del modal o tecla ESC
- Previene scroll del body cuando está abierto
- Delegación de eventos para elementos clonados del carrusel

## Paleta de Colores

```css
:root {
    --bg-dark: #121418;        /* Fondo oscuro principal */
    --bg-darker: #0a0b0d;      /* Fondo más oscuro (footer) */
    --accent: #4ade80;         /* Verde vibrante (acento) */
    --text-white: #ffffff;     /* Texto blanco */
    --text-grey: #a0aec0;      /* Texto gris claro */
    --text-dark: #2d3748;      /* Texto oscuro */
    --card-bg-dark: rgba(255, 255, 255, 0.03); /* Fondo de tarjetas */
}
```

## Diseño Responsive

### Breakpoints
- **Desktop**: > 768px (diseño completo)
- **Mobile**: ≤ 768px (layouts en columna, menú hamburguesa)

### Adaptaciones Móviles
- Logo reducido de 160px a 120px
- Menú hamburguesa con animación slide-down
- Grids convertidos a columna única
- Títulos reducidos (h1: 3.5rem → 2.2rem)
- Tarjetas de proyectos: 350px → 85vw
- Padding reducido en secciones

## Animaciones y Efectos

### Hover Effects
```css
.zoom-hover:hover {
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
}
```

### Carrusel Animado
```css
@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}
```
Duración: 25 segundos, pausa al hover.

### Transiciones
- Botones: 0.3s ease
- Tarjetas: 0.3s ease (transform y box-shadow)
- Enlaces: 0.3s color
- Menú móvil: 0.4s ease

## Accesibilidad

- Atributos `alt` en todas las imágenes
- Atributo `aria-hidden="true"` en modal cerrado
- Navegación por teclado (ESC cierra modal)
- `rel="noopener"` en enlaces externos
- Labels asociados a inputs en formulario
- Contraste adecuado en textos
- Focus visible en elementos interactivos

## SEO y Metadatos

```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Code Unit - Soluciones Tecnológicas</title>
```

Favicons configurados:
- `.ico` para navegadores antiguos
- PNG 32x32 para navegadores modernos
- Apple Touch Icon 180x180 para iOS

## Formulario de Contacto

### Configuración FormSubmit
```html
<form action="https://formsubmit.co/Codeunit.it@gmail.com" method="POST">
    <input type="hidden" name="_subject" value="Nueva consulta desde la web">
    <input type="hidden" name="_captcha" value="false">
    <input type="hidden" name="_next" value="https://codeunit-it.github.io/">
</form>
```

### Campos
- `nombre`: Texto requerido
- `email`: Email requerido con validación HTML5
- `empresa`: Texto opcional
- `telefono`: Tel opcional
- `mensaje`: Textarea requerido (5 filas)
- `acepto`: Checkbox de términos

## Performance

### Optimizaciones
- Fuentes cargadas con `display=swap`
- CSS minificado en producción
- Imágenes optimizadas (JPEG para fotos)
- JavaScript vanilla (sin librerías pesadas)
- Animaciones con `transform` (GPU accelerated)

### Carga de Recursos
1. HTML estructura
2. CSS (inline critical path recomendado)
3. Fuentes (Google Fonts + Font Awesome CDN)
4. JavaScript (defer o al final del body)

## Mantenimiento

### Actualizar Proyectos
1. Agregar imagen en carpeta `images/`
2. Crear nueva `.project-card` en el carrusel
3. Agregar clase `zoomable-img` si se desea zoom
4. El carrusel se clonará automáticamente

### Modificar Colores
Editar variables CSS en `:root` para cambios globales:
```css
:root {
    --accent: #4ade80; /* Cambiar color de acento */
}
```

### Agregar Sección
1. Crear `<section>` con clase `.section-white`, `.section-grey` o `.section-dark`
2. Agregar enlace en navbar
3. Usar clase `.container` para ancho máximo
4. Seguir estructura de headers existente

## Navegadores Soportados

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)
- Móviles: iOS Safari 12+, Chrome Android 90+

## Problemas Conocidos y Soluciones

### Modal no cierra en móvil
**Solución**: Delegación de eventos implementada para elementos clonados.

### Carrusel se corta en móvil
**Solución**: Ancho de tarjetas ajustado a `85vw` en media query.

### Menú no cierra al hacer clic
**Solución**: Event listener en todos los enlaces `.nav-links a`.

## Próximas Mejoras Sugeridas

1. **Lazy loading** de imágenes del carrusel
2. **Animaciones de scroll** (Intersection Observer)
3. **Modo oscuro/claro** toggle
4. **Testimonios** de clientes
5. **Blog** o sección de noticias
6. **Chatbot** de consultas
7. **Versión multiidioma** (inglés)
8. **Analytics** (Google Analytics o similar)

## Contacto del Proyecto

- **Email**: Codeunit.it@gmail.com
- **Ubicación**: Concordia, Entre Ríos, Argentina
- **Institución**: Universidad Tecnológica Nacional - FRC

---

**Última actualización**: Marzo 2026
**Versión**: 1.0
**Autores**: Russo Matias, Leonardo Ramos, Angel Silva
