import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { VideosPage } from '../pages/videos/videos';
import { CoursesPage } from '../pages/courses/courses';
@Component({
  templateUrl: 'app.component.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  items = [
    {
      page: HomePage,
      title: 'YouTube'
    },
    {
      page: VideosPage,
      title: 'Видео-курсы'
    },
    {
      page: CoursesPage,
      title: 'Онлайн-курсы'
    },
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  openPage(item) {
    this.nav.setRoot(item.page);
  }

}

