import { Component, Input } from '@angular/core';
import { Post } from 'src/app/model/post';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent {
// postsData: any;
// post: any;
@Input() postsData: Post | undefined;
}
