# Fabricio Arce — Portfolio

Portfolio bilingüe construido con Astro y pensado para desplegarse como sitio estático en Appwrite Sites.

## Desarrollo

Requisitos: Node.js 22 y pnpm 10.

```bash
pnpm install
pnpm dev
pnpm run build
pnpm preview
```

Las rutas públicas son `/en/` y `/es/`; `/` redirige al inglés.

## Contenido

Los textos generales están en `src/i18n/content.ts`. Los datos pendientes deben revisarse antes de publicar, especialmente fechas, alcance y evidencia de logros. La investigación científica se presenta como trabajo en curso.

## Appwrite Sites

1. Sube el proyecto a GitHub.
2. En Appwrite Console, crea un Site y conecta el repositorio.
3. Selecciona Astro y configura:
   - Install command: `pnpm install --frozen-lockfile`
   - Build command: `pnpm run build`
   - Output directory: `./dist`
4. Despliega primero con el dominio temporal de Appwrite.
5. Añade el dominio propio y actualiza la URL del sitio en `astro.config.mjs` cuando exista.

## Formulario de contacto

La interfaz está terminada, pero el envío permanece desactivado deliberadamente hasta configurar el backend. La implementación prevista usa una Appwrite Function que valida y limita solicitudes, escribe en una tabla privada y envía una notificación. No se debe permitir escritura anónima directa desde el navegador a la base de datos.

Variables previstas:

```text
PUBLIC_APPWRITE_ENDPOINT
PUBLIC_APPWRITE_PROJECT_ID
PUBLIC_APPWRITE_CONTACT_FUNCTION_ID
```

La Function necesitará además secretos privados para Appwrite y el proveedor de correo. Nunca deben usar el prefijo `PUBLIC_` ni guardarse en Git.

## Recursos pendientes

- Avatar o fotografía, favicon e imagen Open Graph.
- Fechas y enlaces de evidencia de logros.
- Proyectos adicionales.
- CV final.
- Proyecto y región de Appwrite.
- Proveedor de email.
