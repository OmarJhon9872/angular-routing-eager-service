import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'app-individual-post',
    templateUrl: './individual-post.component.html',
    styleUrls: ['./individual-post.component.css']
})
export class IndividualPostComponent implements OnInit {

    //La propiedad mensaje sera recibida desde el componente exterior
    //de lo contrario sera undefined o null, segun como se llame aqui
    // igual se llamara en este componente
    @Input()
    mensaje: any;

    //Para emitir un evento del hijo al padre
    //las <> indicaran el tipo de dato que emitira siempre
    @Output()
    clickIndividualPost = new EventEmitter<string>();

    constructor() { }

    ngOnInit(): void { }

    onClickEmitToParent(){
        this.clickIndividualPost.emit("Soy el child, el id del mensaje es: "+this.mensaje.id);
    }
}
