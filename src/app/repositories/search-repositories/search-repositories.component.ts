import { Component, OnInit } from '@angular/core';
import { Repository } from '../models/repository';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-search-repositories',
  templateUrl: './search-repositories.component.html',
  styleUrls: ['./search-repositories.component.scss'],
})
export class SearchRepositoriesComponent implements OnInit {

  repositories: Repository[] = [];
  searchedRepositoryName = '';
  totalResults = 0;

  constructor(
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {}

  searchRepositories() {
    this.repositoryService
      .findRepositoriesByName(this.searchedRepositoryName)
      .subscribe(repositoriesData => {
        this.repositories = repositoriesData.items;
        this.totalResults = repositoriesData.total_count;
      });
  }

}
