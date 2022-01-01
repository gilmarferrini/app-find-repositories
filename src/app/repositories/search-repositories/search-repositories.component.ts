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

  constructor(
    private repositoryService: RepositoryService,
    public alertController: AlertController
  ) { }

  ngOnInit() {}

  searchRepositories() {
    this.repositoryService
      .findRepositoriesByName(this.searchedRepositoryName)
      .subscribe(repositoriesData => {
        this.repositories = repositoriesData.items;
        this.totalResults = repositoriesData.total_count;
      }, error => {
        this.emitAlertError();
      });
  }

  async emitAlertError() {
    const alert = await this.alertController.create({
      cssClass: 'alert',
      header: 'Error',
      message: 'You have reached the request limit. Wait a minute!',
      buttons: ['OK'],
    });

    await alert.present();
  }

}
