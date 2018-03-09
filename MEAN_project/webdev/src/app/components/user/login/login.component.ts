import {Component, OnInit, ViewChild} from '@angular/core';
import{NgForm} from '@angular/forms';
import{Router} from '@angular/router';
import {UserService} from "../../../services/user.service.client";
import {SharedService} from "../../../services/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;

  //properties
  username: String; // see usage as string interpolation
  password: String;
  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private router:Router, private _userService: UserService, private sharedService:SharedService) { }

  ngOnInit() {}

  login(){
    console.log('login');
    // fetching data from loginForm
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    console.log('data',this.username);
    this._userService.login(this.username,this.password)
      .subscribe(
        (data: any)=>{
          this.sharedService.user = data;
          this.errorFlag = false;
          this.router.navigate(['/profile'])
        },
        (error: any)=>{
          this.errorFlag = true;
        }
      );
  }

}
