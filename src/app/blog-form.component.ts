import { Component } from '@angular/core';

import { Blog } from './blog';

@Component({
    selector: 'blog-form',
    templateUrl: './blog-form.component.html'
})
export class BlogFormComponent {
    status = ['Draft', 'Published'];
    model = new Blog(1, 'Add a new Blog', 'Text...');
    submitted = false;

    onSubmit() { this.submitted = true; }
}
