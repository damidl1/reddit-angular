import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { ConnectionService } from 'src/app/services/connection.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  postsData: Post[] = [];
  // subredditData: any;


  constructor(private dataServ: DataService, private connServ: ConnectionService){}

  ngOnInit(): void {
    this.connServ.getPosts().then(posts => {
      if (posts) {
        this.postsData = posts as Post[];
      } else {
        this.postsData = [];
      }

    });


  }

  createPost(){

  }
}


