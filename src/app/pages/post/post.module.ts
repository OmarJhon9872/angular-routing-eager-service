import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostComponent } from './post.component';
import { IndividualPostComponent } from './individual-post/individual-post.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';


@NgModule({
  declarations: [
    PostComponent,
    IndividualPostComponent,
    EjemploComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
