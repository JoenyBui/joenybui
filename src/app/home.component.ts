import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  title = 'app';
  fullName = 'Joeny Bui';
  jobTitle = 'Software Developer';
  email = 'joeny.bui@gmail.com';
  about = "I'm a scientific software developer with a background in structural engineering. I'm interested in all " +
    "aspects of programming, but my current focus is in machine learning, big data, and full-stack web development.";
  website = 'https://www.joenybui.com';

  constructor(private router: Router) {
  }


  ngOnInit(): void {

  }
}
