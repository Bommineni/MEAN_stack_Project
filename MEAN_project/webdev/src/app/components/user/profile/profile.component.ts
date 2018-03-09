import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from "../../../services/user.service.client";
import {SharedService} from "../../../services/shared.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  //properties
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  userId: string;
  user={};
  errorFlag : boolean;
  errorMsg = 'Invalid username or password !';

  constructor(private userService: UserService, private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.getUser();
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data: any) => this.router.navigate(['/login'])
      );
  }

  getUser() {
    this.user = this.sharedService.user;
    this.username = this.user['username'];
    this.firstName = this.user['firstName'];
    this.lastName = this.user['lastName'];
    this.email = this.user['email'];
    this.userId = this.user['_id'];
  }

  updateUser() {
    let updatedUser = {
      _id : this.user['_id'],
      username : this.username,
      firstName :this.firstName,
      lastName :  this.lastName,
      email : this.email

    };


    this.userService.updateUser(updatedUser)
      .subscribe(
        (data: any) => {
          this.userService.findUserById(updatedUser._id)
            .subscribe(
              (data: any) => {
                localStorage.setItem('user', JSON.stringify(data));
                this.ngOnInit();
              }
            )
        },
        (error: any) => this.errorFlag = true
      );
  }
}
