import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';

//Se define junto con la importacion de Routes para
//la creacion de rutas
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {

        path: 'about',
        component: AboutComponent
    },
    {
        path: 'post',
        //Asi es como se hacia antes
        //loadChildren: './pages/post/post.module#PostModule'
        //Como se hace actualmente lazy loading
        loadChildren: () => import('./pages/post/post.module').then( m => m.PostModule )

    },
    {
        path: '**',
        redirectTo: '/home'
    },
];

@NgModule({
    declarations: [],
    imports: [
        //Para crear el sistema de rutas hay que agregar esta implementacion
        RouterModule.forRoot(routes)
    ],
    //Y se exporta el modulo de router
    //Para finalmente importar en el AppModule principal
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
