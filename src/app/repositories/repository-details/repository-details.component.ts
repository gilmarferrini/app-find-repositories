import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Repository } from '../models/repository';
import { RepositoryService } from '../services/repository.service';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
})
export class RepositoryDetailsComponent implements OnInit {

  repository: Repository;
  userRepositories: Repository[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private repositoryService: RepositoryService
  ) { }

  ngOnInit() {
    this.repository = this.activatedRoute.snapshot.data.repository;
    this.repositoryService.getRepositoriesFromUser(this.repository.owner.login)
      .subscribe(data => {
        this.userRepositories = data;
      });
  }

}
