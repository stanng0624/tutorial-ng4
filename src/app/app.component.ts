import { Component, OnDestroy, OnInit } from '@angular/core';
import * as firebase from 'firebase';

import { LoggingService } from './logging.service';

// import { Logger } from 'log4js'
// const Logger = require('log4js');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService]
})
export class AppComponent implements OnInit {
  // selectedMenu: string;

  // shoppingItems: Recipe[] = [];

  // constructor(private logger: LoggingService) {
  constructor() {
  }

  ngOnInit() {

    // Initialize Firebase
    const config = {
      apiKey: 'AIzaSyBbhaqkbBasrgu-SgePc2pRIXvlDT6vG0c',
      authDomain: 'ng-recipe-book-15fab.firebaseapp.com',
    };
    firebase.initializeApp(config);
    // this.selectedMenu = 'recipe';
  }

  // onClickButton (): void {
  //   // alert('abc');
  //   // // var myLogger = Logger.getLogger('test');
  //   // // myLogger.info('abc');
  //   // console.log('ABC');
  //   this.logger.logStatusChange('abc');
  // }

  // onMenuItemChanged(selectedMenuItem: string) {
  //   this.selectedMenu = selectedMenuItem;
  // }

  // isMenuItemSelected(menuItem: string) {
  //   return this.selectedMenu === menuItem;
  // }

  // onAddShoppingItem(recipe: Recipe) {
  //   if (!this.shoppingItems.includes(recipe)) {
  //     this.shoppingItems.push(recipe);
  //     // console.log(recipe);
  //     console.log(this.shoppingItems);
  //   }
  // }
}
