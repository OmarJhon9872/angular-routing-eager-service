import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PostComponent } from './post.component';

const routes: Routes = [
  {
    path: '',
    component: PostComponent
  },
  {
    path: 'ejemplo',
    component: EjemploComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
