import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ComicService} from '../../app/providers/comic.service';
import {DetailPage} from '../detail/detail';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  comics: any[];
  comicFilter: any;
  
  constructor(public navCtrl: NavController, private comicService: ComicService) {
    this.comics = [];
    this.comicFilter = {};
  }

  ngOnInit() {
    this.getAll();
  }

  itemSelected(comic) {
    this.navCtrl.push(DetailPage, {
      comic:comic
    });
  }
  
  getAll() {
    this.comicService.getComics().subscribe(data => {
      console.log(data);
      this.comics = data.data;
    });
  }
  

}
