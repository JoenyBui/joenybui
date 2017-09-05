import { Component } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: FirebaseListObservable<any[]>;
  title = 'app';
  fullName = 'Joeny Bui';
  jobTitle = 'Software Developer';
  email = 'joeny.bui@gmail.com';
  about = "I'm a scientific software developer with a background in structural engineering. I'm interested in all " +
    "aspects of programming, but my current focus is in machine learning, big data, and full-stack web development.";
  website = 'https://www.joenybui.com';

  constructor(db: AngularFireDatabase) {
    this.items = db.list('/items');
  }
}
