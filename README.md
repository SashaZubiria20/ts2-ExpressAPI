Servidor REST API con Express y TypeScript

Este proyecto es una API backend básica construida desde cero para entender cómo funciona un servidor web utilizando Node.js, Express y tipado estricto con TypeScript.

## 🛠️ ¿Cómo está estructurado este entorno?

A diferencia de un proyecto de Frontend (que suele usar herramientas automáticas como Vite), un servidor de Backend requiere la configuración manual de sus herramientas base:

1. **Node.js y Express:** 
   - **Node.js** es el entorno que permite ejecutar JavaScript (y TypeScript) fuera del navegador (en el servidor).
   - **Express** es el framework que nos facilita la creación de rutas web (`/`, `/usuarios`, etc.) y el manejo de peticiones HTTP de forma limpia y rápida.

2. **TypeScript en el Backend:**
   - A diferencia del navegador, Node.js no entiende archivos `.ts` por sí solo. 
   - Instalamos paquetes de definiciones de tipos (`@types/node` y `@types/express`) para que el editor (VS Code) sepa qué métodos tienen los objetos de una petición de servidor (`req` y `res`).

3. **Herramienta de desarrollo (`tsx`):**
   - Utilizamos `tsx` para desarrollo. Su función es "leer" y compilar nuestros archivos `.ts` en tiempo real y reiniciar el servidor automáticamente cada vez que guardamos un cambio, agilizando el flujo de trabajo.

## 📂 Estructura de Archivos
- `src/index.ts`: Punto de entrada de la aplicación. Aquí se inicializa Express, se define el puerto y se configuran las rutas principales.
- `package.json`: Registro de todas las dependencias del proyecto y scripts de ejecución.
- `tsconfig.json`: Configuración de las reglas de compilación para TypeScript en el entorno de Node.

## 🚀 Cómo ejecutar el proyecto en modo desarrollo
1. Instalar dependencias:
   ```bash
   npm install

2. Iniciar el servidor de desarrollo (con recarga automática):
npm run dev

3. Abrir en el navegador: http://localhost: