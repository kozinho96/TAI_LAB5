import { Component, OnInit } from '@angular/core';
import {DataService} from "../../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-blog-create',
  templateUrl: './blog-create.component.html',
  styleUrls: ['./blog-create.component.css']
})
export class BlogCreateComponent implements OnInit {


  public post = {title: String, url: String, content: String};
  constructor(private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit() {
    this.dataService.createPost(this.post).subscribe( (post) => {
      this.router.navigate(['']);
    });
  }
}
