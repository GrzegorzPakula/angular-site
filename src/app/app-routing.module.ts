import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjektyComponent } from './projekty/projekty.component';
import { ZdjeciaComponent } from './zdjecia/zdjecia.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'projekty', component: ProjektyComponent},
  {path: 'zdjecia', component: ZdjeciaComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ProjektyComponent, ZdjeciaComponent, HomeComponent]
