import { OfertaComponent } from './oferta/oferta.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { Routes } from '@angular/router';
import { DiversaoComponent } from './diversao/diversao.component';

export const ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'restaurantes', component: RestaurantesComponent},
    {path: 'diversao', component: DiversaoComponent},
    {path: 'oferta', component: HomeComponent},
    {path: 'oferta/:id', component: OfertaComponent}
]