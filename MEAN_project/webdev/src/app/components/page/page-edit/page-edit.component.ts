import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service.client";
import {ActivatedRoute} from "@angular/router";
import {PageService} from "../../../services/page.service.client";

@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

  pagename: string;
  pagetitle: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }

}
