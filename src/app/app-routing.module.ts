import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroundComponent } from './ground/ground.component';


const routes: Routes = [{path:'Ground' , component:GroundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
