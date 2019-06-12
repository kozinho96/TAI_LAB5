import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../services/data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.css']
})
export class BlogDetailComponent implements OnInit {

  @Input() text: string;
  @Input() id: number;
  @Input() image: string;

  constructor(private dataService: DataService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.dataService.getById(id).subscribe(res => {
        this.id = res['id'];
        this.image = res['url'];
        this.text = res['content'];
      });
    } else {
      this.id = 1;
    }
  }

}
