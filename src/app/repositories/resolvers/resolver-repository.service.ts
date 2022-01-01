import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { RepositoryService } from '../services/repository.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverRepositoryService implements Resolve<Observable<any>> {

  constructor(
    private repositoryService: RepositoryService
  ) { }

  resolve(route: ActivatedRouteSnapshot) {
    const { repositoryName, ownerName } = route.params;
    return this.repositoryService.findRepositoryDetails(repositoryName, ownerName);
  }
}
