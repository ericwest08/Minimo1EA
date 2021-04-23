# Minimo1EA

En mi caso, he tenido que crear un formulario para gestionar el seguimiento de una persona sobre la que se realiza farmacovigilacina con todos los atributos expresados en el archivo person.ts en la carpeta models de mi backend. 

Además de eso he tenido que realizar un listado del histórico de seguimientos. Es decir si ha cambiado el estado del paciente en las siguientes visitas.

Finalmente, he creado una función de borrar seguimiento del paciente.

# Backend

Para iniciar el backend (hay que tener en cuenta que hemos introducido el git ignore), he realizado las siguientes comandas:

1) npm i -> Instala el gestor de paquetes de node.js

2) npm init -y -> Crea 'package.json' (En este caso tendriamos que cambiar los scripts, para poder arrancar el backend. Los scripts los tengo en el package JSON)

3) npm i express cors mongoose morgan -> Instala las dependencias de los modulos de node que necesitamos

4) npm i -d typescript tsc-watch @types/cors @types/express @types/mongoose @types/morgan 
-> Añade las dependencias de desarrollo y los tipos de TypeScript que vamos a utilizar

5) npx tsc --init -> Crea fichero con opciones del compilador (tsconfig.json)

A partir de aquí ya podremos realizar el comando:

npm run dev -> Arrancar backend 


# Frontend

Para crear e iniciar el frontend hay que realizar las siguientes comandas: 

ng new frontend -> Creamos la carpeta frontend y los archivos necesarios para poder empezar a desarrollarlo

ng serve -> Arranca el servidor 

Para crear todos los componentes del proyecto que he introducido hay que hacer:

ng generate component person o 
ng g c person -> Abreviado

Despues de component he puesto controllers, pero este es mi caso, por lo que en otros proyectos se ha de introducir el componente que concuerde con el enunciado/objetivo del frontend

Para generar el servicio hay que hacer:

ng generate service person o 
ng g s service -> Abreviado

Despues de component he puesto person, pero este es mi caso, por lo que en otros proyectos se ha de introducir el componente que concuerde con el enunciado/objetivo del frontend ya que en este caso se introducirán las funciones.

Algo muy importante es en el tsconfig.json, hay que descomentar el "outDir" e introducir: 

"outDir": "./dist" (redirige a la estructura de salida al directorio).

Hacer lo mismo con el "rootDir" e introducir:

"rootDir": "./src" (Especifica el directorio root de los archivos de entrada. Se usa principalmente para controlar la estructura del directorio de salida con --outDir.)                   


