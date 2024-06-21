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