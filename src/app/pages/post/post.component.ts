import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
    selector: 'app-post',
    templateUrl: './post.component.html',
    styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

    mensajes: any = [];

    //4.- Una vez inyectado el servicio en el ngOnInit llamamos el metodo que
    //devuelve el servicio de llamada http
    constructor(private dataService: DataService) { }

    //5.- LLamamos al servicio que devolvera los JSON mediante un observable
    ngOnInit(){
        //6.- Para evitar que la peticion se realize cada que el componente
        //es cargado y visto hacemos un pipe async en el ngFor para evitarlo
        this.mensajes = this.dataService.getPost();
        //     .subscribe( (posts: any) => {
        //         //Traera los post en JSOn de regreso
        //         console.log(posts);
        //         this.mensajes = posts;
        //     }
        // );
    }


    escucharEvento(mensaje: string){
        console.log("Mensaje del child: "+ mensaje);

    }

}
