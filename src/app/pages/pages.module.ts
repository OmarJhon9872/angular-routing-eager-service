import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';



@NgModule({
  //Para poder generalizar los componentes de esta carpeta se declaran
  declarations: [
    HomeComponent,
    ContactComponent,
    AboutComponent,
  ],
  //Y luego se exportan para poder usarlos
  exports: [
    HomeComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
