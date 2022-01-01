import { RepositoryHttpResponse } from './../models/repository-http-response';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {

  private readonly baseURL = 'https://api.github.com';

  constructor(
    private httpClient: HttpClient
  ) { }

  findRepositoriesByName(repositoryName: string, page = 1) {
    return this.httpClient.get<RepositoryHttpResponse>(`${this.baseURL}/search/repositories?q=${repositoryName}&per_page=8&page=${page}`);
  }

  findRepositoryDetails(repositoryName: string, ownerName: string) {
    return this.httpClient.get<any>(`${this.baseURL}/repos/${ownerName}/${repositoryName}`);
  }
}
