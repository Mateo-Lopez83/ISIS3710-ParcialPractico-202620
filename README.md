# ISIS3710-ParcialPractico-202620
Mateo López 
202220119


## 1. Revisión de Accesibilidad y Usabilidad


| # | Ubicación | Herramienta | Regla incumplida | Por qué es un problema | Corrección |


| # | Ubicación | Herramienta | Regla incumplida | Por qué es un problema | Corrección |
| -------- | -------- | -------- | -------- | -------- | -------- |
| 1 | src/components/UserMenu.tsx: 41 | Lighthouse | Los botones no tienen tag para identificarlos, en este caso es el botón de log out | Es un problema por lo que las personas que dependen de ScreenReaders para utilizar una página no tienen forma de saber para qué sirve el botón sin su identificador | Añadir un id a la declaración del html del botón |
| 2 | app/plans/page.tsx:14| Lighthouse | La imagen de cada plan presentado en la página de planes no tiene un atributo alt. Los elementos visuales tienen que tener texto alternativo descriptivo para los usuarios que dependen de ScreenReaders para poder utilzar la página web. | Es un problema por lo que los ScreenReaders no pueden reconocer las imágenes y su significado por su cuenta. Es responsabilidad del desarrollador incluir texto alternativo que guíe al usuario a entender el significado de la imagen sin tener que verla necesariamente. | Añadir el atributo alt a la imagen. Como las imagenes dependen de los planes y no son estáticos, lo mejor es añadir el nombre del plan como texto alternativo. |
| 3 | app/plans/page.tsx:20 | Lighthouse | No se cumple el mínimo de contraste entre el color de fondo y elementos, en este caso el texto de información de cada plan | Es un problema porque dificulta la lectura para las personas que no usan herramientas como ScreenReaders, especialmente para personas con visibilidad reducida o problemas con el reconocimiento de colores | Aumentar la oscuridad del texto (en este caso pasar de text-slate-300 a text-slate-900) |
| 4 |  |  |  |  |  |
| 5 |  |  |  |  |  |