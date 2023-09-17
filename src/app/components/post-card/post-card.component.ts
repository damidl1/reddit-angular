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
@Input() postsArray: Post[] | undefined;


deletePost(){
  if (this.postsData && this.postsArray) {
    const indexToRemove = this.postsArray.indexOf(this.postsData);

    if (indexToRemove !== -1) {
      this.postsArray.splice(indexToRemove, 1);
    }
  }
 }
}
