import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('f') registerForm: NgForm;

  username: string;
  password: string;
  vpassword: string;
   error: string;

  constructor(private _userService: UserService,private router: Router) { }

  ngOnInit() {
  }

  register(){
    console.log('register');
    this.username = this.registerForm.value.username;
    this.password = this.registerForm.value.password;
    this.vpassword = this.registerForm.value.vpassword;
    console.log('register');

   if(this.password === this.vpassword){
     this._userService.register(this.username, this.password)
       .subscribe(
         (data: any)=>{
           this.router.navigate(['/profile']);
         },
         (error: any)=>{
           console.log(error);
           this.error = error._body;

         }
       );
   }else{
     this.error = 'passwords do not match';
   }
  }

}
