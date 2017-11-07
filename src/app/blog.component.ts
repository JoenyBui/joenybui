import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router';

import { Blog } from './blog';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html'
})
export class BlogComponent implements OnInit {
  bodyHtml = "";

  constructor(private router: Router) {
    this.bodyHtml = "<b>Testing</b>"
  }

  ngOnInit(): void {

  }
}
