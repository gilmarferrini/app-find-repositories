import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';

const routes: Routes = [
  {
    path: '',
    component: SearchRepositoriesComponent
  }
];

@NgModule({
  declarations: [
    SearchRepositoriesComponent
  ],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    HttpClientModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class RepositoriesModule { }
