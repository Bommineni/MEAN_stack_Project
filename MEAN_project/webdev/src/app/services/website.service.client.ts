import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

// injecting service into module
@Injectable()

export class WebsiteService {

  baseUrl= environment.baseUrl;

  constructor(private _http:Http, private router:Router){}

  createWebsite(userId:string, website:String){
    const createwebsite ={
      userId : userId,
      website: website
    };
    return this._http.post(this.baseUrl+'/api/user/'+ userId+'/website', createwebsite)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        });
  }

  findAllWebsitesForUser(userId:string) {
    return this._http.get(this.baseUrl+ '/api/user/'+ userId+'/website')
      .map(
        (res:Response)=>{
          const data= res.json();
          return data
        }
      )
  }

  findWebsiteById(websiteId:string){
    return this._http.get(this.baseUrl +'/api/website'+websiteId)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      )

  }
  updateWebsite(websiteId:string, website:string){
    return this._http.put(this.baseUrl+'/api/website/'+websiteId,websiteId, website)
      .map(
        (res:Response)=>{
          const data =res.json();
          return 'updated';
        }
      )

  }
  deleteWebsite(websiteId:string){
    return this._http.delete(this.baseUrl+'/api/website/'+websiteId)
      .map(
        (res:Response)=>{
          const data= res;
        }
      )

  }

}
