import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit{

  postsData: Post[] = [];

  constructor(private dataServ: DataService){}

  ngOnInit(): void {
    this.postsData = this.dataServ.postsArray;

  }

  createPost(){

  }
}


