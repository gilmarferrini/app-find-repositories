import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
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
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class RepositoriesModule { }
