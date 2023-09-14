import { Injectable } from '@angular/core';
import { Post } from '../model/post';
import { ConnectionService } from './connection.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  postsArray: Post[] = [];

  constructor(private connServ: ConnectionService) {
    this.connServ.getPosts().then(posts => {
      console.log(posts)
      // this.postsArray.push(...posts);

    })
  }
}
