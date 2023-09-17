import { Injectable } from '@angular/core';
import { Post } from '../model/post';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  constructor() { }


  getPosts():Promise<void | Post[]>{
     return fetch('https://www.reddit.com/r/italy/new.json')
    .then(resp => resp.json())
    .then(redditObj => redditObj.data)
    .then(data => data.children)
    .then(children => children.map((c:any) => {
      const newPost:Post = {
        id: c.data.id,
        title: c.data.title,
        author: c.data.author,
        created: new Date(c.data.created * 1000),
        thumbnail: c.data.thumbnail,
        url: c.data.url
      }
      return newPost;
    }));


  }
}
