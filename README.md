[![Build Status](https://travis-ci.org/ULL-ESIT-PL-1819/p2-t1-testing-antoniochl98.svg?branch=master)](https://travis-ci.org/ULL-ESIT-PL-1819/p2-t1-testing-antoniochl98)

PRÁCTICA 2
===


# 1.INTRODUCCIÓN
En esta práctica usaremos JS para convertir ficheros RDF en formato JSON

# 2.DIRECTORIOS DE TRABAJO
Para desarrollar este programa crearemos dos carpetas:
	$mkdir data
	$mkdir databases

En la primera descagaremos los ficheros RDF y los descomprimiremos con los siguientes comandos:
	$ curl -O http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2
	$ tar -xvjf rdf-files.tar.bz2

En la segunda es donde guardaremos el código del proyecto, estará dividido en dos carpetas que crearemos así:
	$mkdir test
	$mkdir lib

En la carpeta test guardaremos los tests para el TDD y en el lib losficheros que se encargarán de cambiar los RDF a JSON

# 3.SETTING DEL PROGRAMA
## 3.1.PAQUETES NECESARIOS
Para desarrollar este programa vamos a necesitar
* gulp (Para la automatización de tareas)
* mocha (Para la ejecución de los tests)
* chai (Para escribir el código de los tests,como asserts)
* cheerio (Para trabajar con el AST de los RDF)
* node-dir (Para que el programa rdf-to-bulk.js pueda buscar entre un árbol de directorios los ficheros RDF)

## 3.2.ANTES DE EMPEZAR A PROGRAMAR

Antes de comenzar a programar, y de empezar a instalar paquetes, para facilitar nuestro trabajo ejecutaremos el siguiente comando:

$ npm init -y

Esto hará que se cree un fichero `package-lock.json` y un fichero `package.json` con las dependencias de nuestro proyecto para que cuando alguien descargue nuestro proyecto con solo ejecutar `npm i` en la carpeta donde estén situados estos ficheros se instalen todas automáticamente.
Además en el fichero `package.json` hay un apartado de sccript en el que podrás poner alias a comandos para ejecutarlos de manera más sencilla, nosotros usaremos estos:

![ini](./images/scripts-package.png)


Que sirven para ejecutar los `fichero.js` de la carpeta `test` una vez, para que se mantenga ejecutando y cada vez que cambie un fichero comprueba si funcionan los tests y para poder ver la ejecución desde `chrome://inspect` respectivamente


# 4.PROGRAMA
## 4.1.LIBRERÍAS Y TESTEO
A continuación, se creará una prueba que falle en un fichero que crearemos en test y llamaremos parse-rdf-test.js y posteriormente se creará el código mínimo que haga que funcione en un fichero dentro de la carpeta lib que llamaremos parse-rdf.js.

Haremos esto continuamente hasta obtener el código final(En mi repositorio se puede ver esa evolución a través de los commits).

Finalmente debería quedar un código como el siguiente:

### parse-rdf-test.js

![ini](./images/parse-rdf-test.png)

### parse-rdf.js

![ini](./images/parse-rdf.png)

## 4.2.PROGRAMA EJECUTABLE TO JSON
Cuando ya tengamos creado lo anterior procederemos a utilizarlo en un ejecutable para obtener la salida deseada

Debería ser un código como el siguiente:
### rdf-to-json.js
![ini](./images/rdf-to-json.png)

y su salida:

![ini](./images/to-json-output.png)

# 4.3.PROGRAMA EJECUTABLE TO BULK
Ahora procederíamos a crear un programa para que el formateo de RDF a JSON se aplicara a todos los ficheros RDF que descargamos:

EL programa es como el siguiente:
### rdf-to-bulk.js
![ini](./images/rdf-to-bulk.png)
