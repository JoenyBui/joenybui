import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

import {WritingComponent} from './writing.component';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {

  constructor(private router: Router) {
  }


  ngOnInit(): void {

  }
}
