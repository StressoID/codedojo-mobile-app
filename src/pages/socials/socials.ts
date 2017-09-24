import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-socials',
  templateUrl: 'socials.html'
})
export class SocialsPage {

  public socials: Array<any> = [
    {
      link: 'http://codedojo.ru',
      title: 'Веб-сайт',
    },
    {
      link: 'https://www.youtube.com/channel/UCY10FZglXJ8RL3xB04VpykQ',
      title: 'YouTube',
    },
    {
      link: 'https://t.me/codedojo',
      title: 'Telegram',
    },
    {
      link: 'http://vk.com/codedojo',
      title: 'VK',
    },
    {
      link: 'http://facebook.com/codedojo',
      title: 'Facebook',
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
