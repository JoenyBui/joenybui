import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectFactory, FirebaseObjectObservable } from 'angularfire2/database';

import { Blog } from './blog';

@Component({
    selector: 'blog-form',
    templateUrl: './blog-form.component.html'
})
export class BlogFormComponent {
    status = ['Draft', 'Published'];
    model = new Blog(1, 'Add a new Blog', 'Text...');
    submitted = false;

    blogs: FirebaseListObservable<any[]>;
    
    constructor(private router: Router,
                db: AngularFireDatabase) {
        this.blogs = db.list('/blogs');

    }

    onSubmit() { 
        this.blogs.push(
            this.model
        ) 
    }
}
