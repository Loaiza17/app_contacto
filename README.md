# App Contactos

Aplicación móvil para gestionar contactos, desarrollada con React Native y Expo.

## Requisitos Previos

- [Node.js](https://nodejs.org/) (versión recomendada: 18.x o superior)
- [npm](https://www.npmjs.com/) (se instala junto con Node.js)
- Un emulador Android/iOS o un dispositivo físico con la app [Expo Go](https://expo.dev/client) instalada

## Instalación de Expo CLI

Expo CLI es la herramienta de línea de comandos para desarrollar apps con Expo. Si no la tienes instalada, sigue estos pasos:

1. **Abre una terminal** (CMD, PowerShell o Terminal en Mac/Linux).
2. Ejecuta el siguiente comando para instalar Expo CLI globalmente:

   ```sh
   npm install -g expo-cli
   ```

   > Si tienes problemas de permisos, puedes anteponer `sudo` en Mac/Linux:
   > 
   > ```sh
   > sudo npm install -g expo-cli
   > ```

3. Verifica la instalación:

   ```sh
   expo --version
   ```

   Deberías ver un número de versión como respuesta.

## Instalación del Proyecto

1. **Clona o descarga este repositorio** en tu computadora.

2. **Abre una terminal** en la carpeta raíz del proyecto (donde está el archivo `package.json`).

3. **Instala las dependencias** del proyecto ejecutando:

   ```sh
   npm install
   ```

   Esto descargará todas las librerías necesarias para que la app funcione.

## Ejecución de la App

1. **Inicia el servidor de desarrollo de Expo**:

   ```sh
   npm start
   ```

   o también puedes usar:

   ```sh
   expo start
   ```

2. Se abrirá una ventana en tu navegador con el panel de Expo.

3. **Opciones para correr la app:**

   - **En un dispositivo físico:**  
     - Instala la app [Expo Go](https://expo.dev/client) desde Google Play o App Store.
     - Escanea el código QR que aparece en el panel de Expo con la app Expo Go.
   - **En un emulador Android:**  
     - Asegúrate de tener Android Studio y un emulador configurado.
     - Haz clic en "Run on Android device/emulator" en el panel de Expo o ejecuta:
       ```sh
       npm run android
       ```
   - **En un emulador iOS:**  
     - Solo disponible en Mac con Xcode instalado.
     - Haz clic en "Run on iOS simulator" o ejecuta:
       ```sh
       npm run ios
       ```
   - **En el navegador (Web):**
     - Haz clic en "Run in web browser" o ejecuta:
       ```sh
       npm run web
       ```

## Estructura del Proyecto

- `App.js`: Punto de entrada principal de la app.
- `index.js`: Registro del componente raíz.
- `Contactos/`: Componentes relacionados con la gestión de contactos.
- `Navegacion/`: Configuración de la navegación.
- `Pantallas/`: Pantallas adicionales (si las agregas).
- `assets/`: Imágenes y recursos estáticos.

## Funciones de la app

- permite agregar contactos nuevos
- perite eliminar contactos
- funcion de marcar un contacto como favorito
- visualizacion de papelera de contactos  

## Notas

- Si tienes problemas con Expo CLI, asegúrate de tener la última versión de Node.js y npm.
- Si modificas el código y no ves los cambios, intenta cerrar y volver a abrir la app en Expo Go o reiniciar el servidor con `npm start`.

---

¡Listo! Ahora puedes comenzar a usar y modificar
