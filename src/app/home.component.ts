import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectFactory, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  items: FirebaseListObservable<any[]>;
  blogs: FirebaseListObservable<any[]>;
  home: FirebaseObjectObservable<any>;

  title = 'app';
  fullName = 'Joeny Bui';
  jobTitle = 'Software Developer';
  email = 'joeny.bui@gmail.com';
  about = "";
  website = 'https://www.joenybui.com';

  constructor(private router: Router,
              db: AngularFireDatabase) {
    this.items = db.list('/items');
    this.blogs = db.list('/blogs');
    this.home = db.object('/home');

    this.home.subscribe(snapshot => {
      this.fullName = snapshot['fullName'];
      this.email = snapshot['email'];
      this.jobTitle = snapshot['jobTitle'];
      this.about = snapshot['about'];
      this.website = snapshot['website'];

    });
    // this.saveData();
  }

  saveData() {
    this.home.set({
      fullName: 'Joeny Bui',
      jobTitle: 'Software Developer',
      email: 'joeny.bui@gmail.com',
      about: 'I\'m a scientific software developer with a background in structural engineering.',
      website: 'https://www.joenybui.com'
    })
  }

  ngOnInit(): void {
  }
}
