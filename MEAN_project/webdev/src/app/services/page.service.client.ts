import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class PageService {

  baseUrl = environment.baseUrl;

  constructor(private _http:Http, private router:Router){}

  createPage(websiteId:string, page:string){
    const createpage ={
      websiteId: websiteId,
      page: page
    };
    return this._http.post(this.baseUrl+'/api/website/'+websiteId+'/page', createpage)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      )

  }

  findAllPagesByWebsite(websiteId:string){
    return this._http.get(this.baseUrl+'/api/website/'+websiteId+'/page')
      .map(
        (res:Response)=>{
          const data= res.json();
          return data;
        }
        );
  }

  findPageById(pageId:string){
    return this._http.get(this.baseUrl+'/api/page/'+pageId)
      .map(
        (res:Response)=>{
          const data=res.json();
          return data;
        }
      );
  }

  updatePage(page){
    return this._http.put(this.baseUrl+'/api/page/'+ page._Id, page)
      .map(
        (res:Response)=>{
          const data=res.json();
          return 'update';
        }
      );
  }

  deletePage(pageId:string){
    return this._http.delete(this.baseUrl+'/api/page/'+pageId)
      .map(
        (res:Response)=>{
          const data= res;
        }
      )

  }


}
