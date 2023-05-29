# Formulario de creación de cuenta ficticia
Este repositorio contiene el código fuente de un formulario de creación de cuenta ficticia para acceder a una página web. Fue desarrollado como parte del ejercicio de laboratorio del curso "Desarrollo Front-End (Nivel 2) ED.2022" del programa Samsung DesArrolladoras.

### Validaciones
El formulario incluye las siguientes validaciones:

Todos los campos son obligatorios. En caso de dejar algún campo en blanco, se mostrará un error.
- El campo "Nombre" solo acepta caracteres de texto. Cualquier carácter numérico no será admitido.
- El campo "Email" debe ser una dirección de correo electrónico válida. Se utiliza una expresión regular para validar el formato del correo electrónico.
- El campo "Clave" debe tener un máximo de 8 caracteres.
- El valor introducido en los campos "Clave" y "Confirme su clave" deben ser idénticos. En caso contrario, se mostrará un error.

### Archivos y directorios
El repositorio está estructurado de la siguiente manera:

- **index.html:** Archivo HTML que contiene la estructura del formulario.
- **style.css:** Archivo CSS que define los estilos del formulario y las validaciones correctas e incorrectas.
- **index.js:** Archivo JavaScript que contiene la lógica de validación del formulario y muestra una alerta de inscripción exitosa al enviar el formulario.
- **images/:** Directorio que contiene los iconos correspondientes a las validaciones positivas y negativas.

### Uso

**1.-** Clona este repositorio en tu máquina local:
`git clone https://github.com/CrisCorreaS/formulario-DesArrolladoras.git`

**2.-** Abre el archivo index.html en tu navegador web.

**3.-** Completa el formulario con los datos requeridos y observa las validaciones en tiempo real.

**4.-** Al hacer clic en el botón "ENVIAR", se mostrará una alerta si todos los campos se validan correctamente.

### Contribuciones
Las contribuciones son bienvenidas. Si encuentras algún problema o tienes alguna mejora que sugieras, puedes abrir un issue o enviar una solicitud de pull.

### Licencia
Este proyecto está bajo la Licencia MIT.
