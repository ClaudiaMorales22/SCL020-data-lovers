# Data Lovers

# Nombre del Proyecto: Medallistas Olímpicas Femeninas Río 2016


## 1. Preámbulo

Los Juegos Olímpicos de Río de Janeiro 2016,​ oficialmente conocidos como los Juegos de la XXXI Olimpiada, o más comúnmente como Río 2016, fue un evento multideportivo internacional, celebrado en la ciudad de Río de Janeiro, Brasil, entre el 5 y el 21 de agosto de 2016. También se realizaron en dicha ciudad los XV Juegos Paralímpicos, entre el 7 y el 18 de septiembre del mismo año.



## 2. Resumen del proyecto

En este proyecto encontrarás una página web con una Linda Interfaz en donde podrás visualizar un conjunto de datos relacionados con las atletas medallistas femeninas que participaron en los Juegos Olímpicos de Río 2016. Dichos datos se mostrarán en tarjetas por cada una de las atletas en donde se registran datos importantes como su Nombre, País al cual pertenece, Disciplina en la que participó y Medalla Obtenida. De igual manera podrás buscar por nombre a la atleta de tu interés, así como también filtrarlas por equipo, medalla y disciplina. Además se pueden ordenar las tarjetas  en orden alfabético de manera ascendente y descendente y en todo momento se mostrará el número total de atletas de acuerdo a la búsqueda y filtro ejecutado.

![screen1](src/images/PortadaRio2016.jpg)
![screen1](src/images/Pagina2Rio.jpg)

## 3. Objetivos de aprendizaje

Uso de HTML semántico, uso de selectores de CSS, modelo de caja (box model): borde, margen, padding, Uso de flexbox en CSS, uso de selectores del DOM, manejo de eventos del DOM (listeners, propagación, delegación), manipulación dinámica del DOM, tipos de datos primitivos, Diferenciar entre tipos de datos primitivos y no primitivo, Arrays (arreglos),Objetos (key, value),  Variables (declaración, asignación, ámbito), uso de condicionales (if-else, switch, operador ternario, lógica booleana), uso de bucles/ciclos (while, for, for..of), funciones (params, args, return), pruebas unitarias (unit tests), módulos de ECMAScript (ES Modules), Uso de linter (ESLINT), Uso de identificadores descriptivos (Nomenclatura y Semántica), Diferenciar entre expresiones (expressions) y sentencias (statements), Control de Versiones (Git y GitHu, Git: Instalación y configuración, Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote), GitHub: Creación de cuenta y repos, configuración de llaves SSH, GitHub: Despliegue con GitHub Pages, GitHub: Colaboración en Github (branches | forks | pull requests | code review | tags). Diseñar un producto o servicio poniendo a la usuaria en el centro. Crear prototipos de alta fidelidad que incluyan interacciones. Seguir los principios básicos de diseño visual. Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad.


## 4. Detalles del proyecto

## Historias de usuario

- Usuaria Nro 1.

  Es una joven mujer de 21 años de edad que practica atletismo, pues su próxima meta es participar en las venideras olimpiadas, por lo que le interesa conocer datos tales como: país, nro de athletas y medallas obtenidas de las deportistas que pertenecen a la misma disciplina que ella practica.   

  Criterios de aceptación:
- Que pueda visualizar las atletas femeninas pertenecientes a las disciplina de atletismo.
- Que escriba el nombre de la atleta que busca y le muestre el resultado.
- Que  muestre el total de atletas de la disciplina de atletismo.


- Usuaria Nro 2.

Yo como tenista de 25 años que participará en las próximas olimpiadas quiero filtrar la información por deportes para saber quiénes fueron medallistas en mi especialidad.

  Criterios de aceptación:
- Debe haber una opción para seleccionar medallistas por deporte.
- Debe mostrar tarjeta con nombre, deporte, país y medalla.
- Se debe mostrar cantidad de atletas por deporte.
- Debe haber una barra de búsqueda por nombre de atletas.



 Usuario Nro 3.

  Es un hombre periodista de 45 años de edad que cubre las fuentes
 de deporte de un canal de television, se encuentra preparando un reportaje acerca
 de las olimpiadas de Rio 2016 y le gustaria obtener informacion de las atletas femeninas que participaron en esa edición, 
por lo cual le interesa poder filtrar por país, medalla obtenida y también ordenar de la A-Z y de la Z-A para tener
 más fácil acceso a nombres de competidoras.
  Criterios de aceptación:
- Que pueda filtrar por país.
- Que pueda filtrar por medalla.
- Que la data pueda ser ordenada por orden alfabético de la A-Z y de la Z-A.



### Diseño de la Interfaz de Usuario

#### Prototipo de baja fidelidad

Durante tu trabajo deberás haber hecho e iterado bocetos (_sketches_) de tu
solución usando papel y lápiz. Te recomendamos tomar fotos de todas las
iteraciones que hagas, que las subas a tu repositorio y las menciones en tu
`README.md`.

#### Prototipo de alta fidelidad

Lo siguiente es diseñar tu Interfaz de Usuario (UI por sus siglas en inglés -
_User Interface_). Para eso debes aprender a utilizar alguna herramienta de
diseño visual. Nosotros te recomendamos [Figma](https://www.figma.com/) que es
una herramienta que funciona en el navegador y, además, puedes crear una cuenta
gratis. Sin embargo, eres libre de utilizar otros editores gráficos como
Illustrator, Photoshop, PowerPoint, Keynote, etc.

El diseño debe representar el _ideal_ de tu solución. Digamos que es lo que
desearías implementar si tuvieras tiempo ilimitado para trabajar. Además, tu
diseño debe seguir los fundamentos de _visual design_.

#### Testeos de usabilidad

Durante el reto deberás hacer _tests_ de usabilidad con distintos usuarios, y
en base a los resultados, deberás iterar tus diseños. Cuéntanos
qué problemas de usabilidad detectaste a través de los _tests_ y cómo los
mejoraste en tu propuesta final.

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)

Luego de diseñar tu interfaz de usuario deberás trabajar en su implementación.
**No** es necesario que construyas la interfaz exactamente como la diseñaste.
Tu tiempo de hacking es escaso, así que deberás priorizar

Como mínimo, tu implementación debe:

1. Mostrar la data en una interfaz: puede ser un card, una tabla, una lista,
   etc.
2. Permitir al usuario interactuar para obtener la infomación que necesita.
3. Ser _responsive_, es decir, debe visualizarse sin problemas desde distintos
   tamaños de pantallas: móviles, tablets y desktops.
4. Que la interfaz siga los fundamentos de _visual design_.

### Pruebas unitarias

El _boilerplate_ de este proyecto no incluye Pruebas Unitarias (_tests_), así es
que  tendrás que escribirlas tú para las funciones encargadas de  _procesar_,
_filtrar_ y _ordenar_ la data, así como _calcular_ estadísticas.

Tus _pruebas unitarias_ deben dar una cobertura del 70% de _statements_
(_sentencias_), _functions_ (_funciones_), _lines_ (_líneas_), y _branches_
(_ramas_) del archivo `src/data.js` que contenga tus funciones y está detallado
en la sección de [Consideraciones técnicas](#srcdatajs).

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

Features/características extra sugeridas:

* En lugar de consumir la data estática brindada en este repositorio, puedes
  consumir la data de forma dinámica, cargando un archivo JSON por medio de
  `fetch`. La carpeta `src/data` contiene una versión `.js` y una `.json` de
  de cada set datos.
* Agregarle a tu interfaz de usuario implementada visualizaciones gráficas. Para
  ello te recomendamos explorar librerías de gráficas como
  [Chart.js](https://www.chartjs.org/)
  o [Google Charts](https://developers.google.com/chart/).
* 100% Coverage


* [ ] Usa VanillaJS.
* [ ] Pasa linter (`npm run pretest`)
* [ ] Pasa tests (`npm test`)
* [ ] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
  lines y branches.
* [ ] Incluye _Definición del producto_ clara e informativa en `README.md`.
* [ ] Incluye historias de usuario en `README.md`.
* [ ] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
  `README.md`.
* [ ] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
  en `README.md`.
* [ ] Incluye link a Zeplin en `README.md`.
* [ ] Incluye el listado de problemas que detectaste a través de tests de
  usabilidad en el `README.md`.
* [ ] UI: Muestra lista y/o tabla con datos y/o indicadores.
* [ ] UI: Permite ordenar data por uno o más campos (asc y desc).
* [ ] UI: Permite filtrar data en base a una condición.
* [ ] UI: Es _responsive_.