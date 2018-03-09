import { Component, OnInit } from '@angular/core';
import {WebsiteService} from "../../../services/website.service.client";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-website-ulst',
  templateUrl: './website-ulst.component.html',
  styleUrls: ['./website-ulst.component.css']
})
export class WebsiteUlstComponent implements OnInit {

  userId : String;
  websites = [{}];

  constructor(private _websiteService : WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.params
      .subscribe(
        (params: any) => {
          this.userId = params['userId'];
        }
      );
     }


}
