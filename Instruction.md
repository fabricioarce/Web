Quiero construir una web con Astro o Next.js lo que sea que mas se adapte a lo que te voy a pedir, mi idea es principalmente desplegarlo en Appwritte, segun lo que necesite pero tambien tengo acceso a un plan barato de Heroku

CONTEXTO DEL PROYECTO
- Proposito del sitio: Es un portfolio personal, pero no es unicamente de programacion, es para llevar todos mis proyecto, desde el de investigacion hasta el de desarrollo de software.
- Publico objetivo: Mi publico objetivo es empresas que puedan estar buscando genete, para posible universidades cuando valla a aplicar al pregrado.
- Paginas principales: Me gustaria que todo estuviera en uno o por lo menos lo mas importante, y que tuviera secciones como: Home, Sobre mi, Proyectos, Contacto, en un futuro tambien tendria una seccion de blog. 
- Me gustaria que estuviera principalmente en ingles y español. y que en un futuro soportara i18n.

STACK TECNICO
- Framework: De preferencia Astro o Next.js (el que mas se adapte)
- Estilo: Me gustaria que tenga un estilo retro y de programacion competitiva, puede ser una combinacion de retro y moderno. tenia un par de ideas como: 
  * Estilo "Judge-System" (Pantalla de Envío): Organiza tu biografía y proyectos como un problema de programación.
    * Sección "About Me": Presentada como la "Descripción del Problema" (Problem Statement), restricciones de tiempo/memoria (tu edad, ubicación) y ejemplos de Entrada/Salida (ej. Input: "Café", Output: "Código limpio").
    * Proyectos: Presentados como casos de prueba (Test Cases) que dan Accepted (AC) al hacer clic o interactuar.
  * Terminal Interactiva CLI: Una interfaz minimalista de línea de comandos donde el visitante pueda escribir comandos como cat about.txt, run portfolio.py o help para navegar.
  * Dashboard de Estadísticas: Muestra tus métricas personales estilo perfil competitivo (Rating graph, problemas resueltos por dificultad, lenguajes más usados).
  Componentes clave y cómo estructurarlos
  | Sección | Idea de Diseño Temático | Contenido Real |
  |---|---|---|
  | Hero / Inicio | Editor de código con sintaxis resaltada | Nombre, avatar, biografía corta e íconos de redes (GitHub, Codeforces, LinkedIn). |
  | Skills | Complejidad algorítmica (O(1), O(\log n)) | Lenguajes (C++, Python), estructuras de datos, herramientas web. |
  | Proyectos | Lista de problemas resueltos con estado Accepted | Capturas, enlaces a repositorios y demostraciones en vivo. |
  | Logros | Tabla de posiciones (Leaderboard) / Medallero | Competencias (ICPC, HashCode, etc.), certámenes ganados o puestos destacados. |
  Detalles interactivos ("Easter Eggs")
  * Juego de lógica integrado: Agrega una sección o modal donde el visitante deba resolver un acertijo lógico o problema corto en JavaScript/Python para desbloquear tu información de contacto directa o descargar tu CV.
  * Animación de tipeo (Typewriter): Muestra cómo se "escribe" y compila tu biografía en tiempo real en la pantalla de inicio.
  * Gráfico de actividad: Añade un calendario estilo historial de contribuciones de GitHub para mostrar tus proyectos o tu constancia en problemas.
- Legunaje el que desees
- Gestor de paquetes prefirira pnpm
- Componentes interactivos: todos lo que hagan falta

INTEGACION CON APPWRITE
- basicamente lo creeas necesario del o siguiente:
- Servicios a usar:
  - Auth: [sí/no — email/password, OAuth (Google, GitHub), magic link, etc.]
  - Databases: [colecciones necesarias y sus campos, ej. "posts" (title, slug, content, date), "contactos" (name, email, message)]
  - Storage: [para qué, ej. subir imágenes de proyectos/avatares]
  - Functions: [si necesitas lógica serverless, ej. enviar email de contacto]
- Appwrite endpoint y project ID: [se configurarán como variables de entorno, no las escribas en texto plano] 

FUNCIONALIDADES CLAVE
- Las que creas necesarias pero te doy  un par
- listado dinámico de proyectos/posts desde Appwrite Database
- formulario de contacto que guarda en Appwrite Database y envía notificación

DISEÑO
- Estilo visual: El mencionado anteriormente, estilo retro moderno y de programacion competitiva. Que si se puede tambien pueda cambiar entre claro y oscuro.
- Responsive: mobile-first
- Accesibilidad: cumplir buenas prácticas básicas (contraste, alt text, navegación por teclado)

DESPLIEGUE
- Objetivo: desplegar en Appwrite Sites, con build de Astro en modo [static / server (adapter-node) según si usas SSR]
- Variables de entorno: documentar cuáles son necesarias (APPWRITE_ENDPOINT, APPWRITE_PROJECT_ID, etc.) sin exponer valores reales
- Dominio: [dominio propio a conectar / subdominio de Appwrite por ahora]

CRITERIOS DE ACEPTACIÓN
- El proyecto compila sin errores (`pnpm run build`)
- Las funcionalidades de Appwrite (auth/db/storage) funcionan end-to-end en local antes de desplegar
- El sitio queda accesible públicamente vía Appwrite Sites
- Código organizado siguiendo convenciones estándar de Astro (carpetas src/pages, src/components, src/layouts)
