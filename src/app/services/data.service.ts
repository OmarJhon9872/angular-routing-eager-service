import { Injectable } from '@angular/core';
//1.- Agregamos el modulo en AppModule HttpClientModule
//2.- (AppModule) importamos e implementamos en el constructor aqui
import { HttpClient } from '@angular/common/http';
//Se ejecuta cada que un observable es ejecutado
import { tap } from 'rxjs/operators';

@Injectable({
    //Actualmente ya no hace falta importarlo en el AppModule ya que 
    //se especifica el alcance de manera global con root
    providedIn: 'root'
})
export class DataService {

    //3.- Una vez importado el cliente HTTP getPost() retornara los JSON
    constructor(private http: HttpClient) { }

    //4.- Inyectamos el servicio en el componente Post#construct (pages/post/post.component)
    //EN caso de configurar headers sera como siguiente parametro
    getPost() {
        //El return regresa un observable
        return this.http.get('https://jsonplaceholder.typicode.com/posts')
            //Ejecucion del tap al suscribirse al servicio
            .pipe( tap( console.log ) );
    }
}
