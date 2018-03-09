import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {SharedService} from "./shared.service";

// injecting service into module
@Injectable()

export class UserService {

  constructor(private _http: Http, private router: Router, private sharedService: SharedService) { }

  baseUrl = environment.baseUrl;

  options = new RequestOptions();

  login(username: String, password: String) {
    this.options.withCredentials = true;
    const logindata = {
      username : username,
      password : password
    };
    return this._http.post(this.baseUrl + '/api/login', logindata, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  loggedIn(){
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl+'/api/loggedIn','', this.options)
      .map(
        (res: Response)=>{
          const user = res.json();
          if(user != '0'){
            this.sharedService.user = user;
            return true;
          }else{
            this.router.navigate(['/login']);
            return false;
          }
        });
  }


  register(username: String, password: String) {

    this.options.withCredentials = true;
    const registerdata = {
      username : username,
      password : password
    };

    return this._http.post(this.baseUrl + '/api/register', registerdata, this.options)
      .map(
        (res: Response) => {
          const data = res.json();
          return data;
        }
      );
  }

  logout(){
    this.options.withCredentials = true;
    return this._http.post(this.baseUrl + '/api/logout', '', this.options)
      .map(
        (res: Response) => {
          const data = res;
        }
        );
  }

  findUserById(userId: string){
    return this._http.get(this.baseUrl+'/api/user/'+userId)
      .map(
      (res:Response)=>{
        const data = res.json();
        return data;
      }
    )
  }

  findUserByUsername(username:string){
    return this._http.get(this.baseUrl+'/api/user/'+username)
      .map(
        (res:Response)=>{
          const data=res.json();
          return data;
        })

  }

  findUserByCredentials(username:string, password:string){
    return this._http.get(this.baseUrl+'/api/user/'+username+password)
      .map(
        (res:Response)=>{
          const data = res.json();
          return data;
        }
      );

  }
  updateUser(user){
    return this._http.put(this.baseUrl+'/api/user/'+user._id,user)
      .map(
        (res:Response)=>{
          const data = res.json();
          return 'updated';
        }
        );
  }

  deleteUser(userId){
    return this._http.delete(this.baseUrl+'/api/user/'+userId)
      .map(
      (res:Response)=>{
        const data = res;
      }
    );
  }
}
