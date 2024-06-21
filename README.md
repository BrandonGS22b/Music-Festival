<p align="center">
  <a href="https://github.com/BrandonGS22b/Front/blob/main/node%20and%20sass/logo.png" target="blank"><img src="https://github.com/BrandonGS22b/Front/blob/main/node%20and%20sass/logo.png" width="200" alt="Nest Logo" /></a>
</p>


<img src="https://i.imgur.com/dBaSKWF.gif" height="20" width="100%"><!-- se agrega estilo css line en rgb-->

<h3>Instalamos Dependencias</h3>

```bash

npm init

```
```bash

npm i sass

```

<img src="https://i.imgur.com/dBaSKWF.gif" height="20" width="100%"><!-- se agrega estilo css line en rgb-->

<h3>crearmos un index.html</h3>
<a>
1-agregamos un h1 hola brandon

2-importamos el link del css que se va llamar desde build
</a>

<h3>creamos una carpeta src</h3>
<a>
1-aquí vamos a guardar las img

2-create carpeta scss/app.scss
<br>
3-aquí en esta carpeta es donde vamos hacer todo nuestro css principal siempre aquí de primero y cuando hagamos un run se cargara automáticamente en el build

</a>

<h3>configuramos el packaje.json</h3>


```bash
"scripts": {

    "sass": "sass --watch src/scss:build/css"
  },
  ```
  <a>
1-se aplica --watch para que haga la simulación de un servidor y cada vez que haga un cambio se refresca automáticamente sin necesidad de ejecutarlo nuevamente

-esto nos creara un build/app.css es donde vamos hacer todo nuestro htmls


</a>

<h3>instalando la dependencia de gulp</h3>

```bash

npm i --save-dev gulp

```
<h4>creamos el archivo de glupfile.js en lo principal</h4>
<a>creamos nuestra function</a>

```bash
    function hola(done){
    console.log("hola desde gulpfile.js");
    done();//esto nos dice que  ya finalizo la tarea

```

<h4>llamamos nuestra función en nuestro package.json</h4>

```bash
 "scripts": {
    "sass": "sass --watch src/scss:build/css",
    "hola" : "gulp hola" //con esto llamamos la function de glupfile.js
  },

```
<h4>hasta este punto vamos correr nuestro proyecto con:</h4>

```bash
#para ver el css de build
npm run sass
```

```bash
#para ver la function de gulpfile del console.log
npm run hola
```
<img src="https://i.imgur.com/dBaSKWF.gif" height="20" width="100%"><!-- se agrega estilo css line en rgb-->

<h3>compilar sass con gulp</h3>
<a>1.instalamos dependencia</a>

```bash
npm i --save-dev gulp-sass

```
<h4>2. ya no vamos a levantar el servicio desde package.json vamos agregar dos function css y wacht para levantarlo desde gulpfile.js</h4>

```bash
import {src,dest, watch} from 'gulp';
//este es el src:sass --watch src
//y este el dest :scss:build/css
import gulpSass  from 'gulp-sass';
import * as dartSass from 'sass';


//unimos los dos imports gulpSass y * as dartSass
const sass = gulpSass(dartSass);

export function css(done){
    src('src/scss/app.scss') //esto ubica al archivo donde hacamos nuestras modificacion del css
        .pipe(sass()) //aplicamos sass
        .pipe(dest('build/css'))//dest donde queremos almacenar ese archivo osea la modificacion del app.scss

    done();
}

//implementamos el whatch para no estar levantando a cada rato el servicio
export function dev(){
    watch('src/scss/app.scss', css); //bucamos el archivo y llamamos la function css que esta arriba
}


//todo esto es lo misto que esto que esta en el package.json "sass": "sass --watch src/scss:build/css",


```
<h3>hasta este punto vamos correr nuestro proyecto con:</h3>
<a>
para ver la function de gulpfile pero la llamamos directamente con solo el dev que viene desde gulpfile y ahora se nos ejecuta o compilara el gulp y sass al mismo tiempo
</a>

```bash
#ejecutamos el dev que esta en package.json

npm run dev


















