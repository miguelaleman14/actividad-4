# actividad-4
# API de Gestión de Productos - Miguel Alemán

Este proyecto es una API REST con Node.js, Express y MongoDB que utiliza JWT para seguridad.

## Instalación y Ejecución
1. Clonar el repositorio.
2. Ejecutar `npm install`.
3. Configurar las variables `MONGO_URI` y `JWT_SECRET` en un archivo `.env`.
4. Ejecutar con `npm start` o `npx nodemon server.js`.

## Pipeline de CI/CD
El archivo `.github/workflows/deploy.yml` contiene la configuración para el despliegue automático en Vercel/Render cada vez que se hace un push a la rama main.
