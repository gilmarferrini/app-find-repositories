import { ResolverRepositoryService } from './resolvers/resolver-repository.service';
import { RepositoryDetailsComponent } from './repository-details/repository-details.component';
import { NgModule } from '@angular/core';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SearchRepositoriesComponent } from './search-repositories/search-repositories.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SearchRepositoriesComponent
  },
  {
    path: 'details/:repositoryName/:ownerName',
    component: RepositoryDetailsComponent,
    resolve: {
      repository: ResolverRepositoryService
    }
  }
];

@NgModule({
  declarations: [
    SearchRepositoriesComponent,
    RepositoryDetailsComponent
  ],
  imports: [
    IonicModule.forRoot(),
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
})
export class RepositoriesModule { }
