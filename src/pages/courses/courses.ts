import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-courses',
  templateUrl: 'courses.html',
})
export class CoursesPage {

  public courses: Array<any> = [];

  constructor(public navCtrl: NavController, private http: Http, private navParams: NavParams) {
    this.http.get('/courses')
      .map(response => response.json())
      .subscribe(response => {
        if (this.navParams.data) {
          this.courses = response.filter(f => f.type === this.navParams.data);
        } else {
          this.courses = response.filter(f => !f.type && f.type !== 'OnlineCourse');
        }

        console.log(this.courses);
      });
  }

}
