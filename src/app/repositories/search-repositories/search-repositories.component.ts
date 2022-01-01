import { AlertController } from '@ionic/angular';
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
  hasSearched = false;
  lastSearchedRepository = '';
  currentPage = 1;

  constructor(
    private repositoryService: RepositoryService,
    public alertController: AlertController
  ) { }

  ngOnInit() {}

  searchRepositories() {

    if (this.searchedRepositoryName.trim() === '') {
      this.emitAlertError('Fill search field');
      return;
    }

    this.repositoryService
      .findRepositoriesByName(this.searchedRepositoryName)
      .subscribe(repositoriesData => {
        this.repositories = repositoriesData.items;
        this.totalResults = repositoriesData.total_count;
        this.lastSearchedRepository = this.searchedRepositoryName;
        this.hasSearched = true;
      }, error => {
        this.emitAlertError('You have reached the request limit. Wait a minute!');
      });
  }

  async emitAlertError(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Error',
      message,
      buttons: ['OK'],
    });

    await alert.present();
  }

  loadRepositoriesByPage(page = 1) {
    this.repositoryService
    .findRepositoriesByName(this.lastSearchedRepository, page)
    .subscribe(repositoriesData => {
      this.repositories = repositoriesData.items;
      this.totalResults = repositoriesData.total_count;
    }, error => {
      this.emitAlertError('You have reached the request limit. Wait a minute!');
    });
  }

  nextPage() {
    this.currentPage++;

    this.loadRepositoriesByPage(this.currentPage);
  }

  previousPage() {

    if (this.currentPage === 1) {
      this.emitAlertError('Not possible! Page cannot be equal to 0');
      return;
    }

    this.currentPage--;

    this.loadRepositoriesByPage(this.currentPage);
  }
}
