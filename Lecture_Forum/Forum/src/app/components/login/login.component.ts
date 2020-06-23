import { Component, OnInit, Inject, Input } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { ErrorComponent } from '../error/error.component';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  @Input() username: string;
  @Input() password: string;
  bankerLogin: boolean;
  registerUser: User;
  hide = true;
  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private user: UserService,
    private error: MatDialog,
    private apis: DatabaseService
  ) {}

  ngOnInit(): void {}
  doLogin(usernm: string, pass: string): void {
    let isInError = false;
    this.apis.getPassword(usernm).subscribe((result) => {
      if (result == null || result == undefined || result.length == 0) {
        //throw error
        this.error.open(ErrorComponent, {
          width: '70%',
          data: { message: 'User not found!!' },
        });
      } else if (result.password == null || result.password != this.password) {
        //throw error
        this.error.open(ErrorComponent, {
          width: '70%',
          data: { message: 'Incorrect Credentials!!' },
        });
      } else {
        if (usernm) {
          this.user.doLogin(usernm, pass, result.userID);
        }
        this.dialogRef.close();
      }
    });
  }
  register(username, password): void {
    this.registerUser = new User();
    this.registerUser.username = username;
    this.registerUser.password = password;
    this.apis.getPassword(username).subscribe((data) => {
      if (data === null || data === undefined || data.length == 0) {
        this.apis.createUser(this.registerUser).subscribe((createData) => {
          this.error.open(ErrorComponent, {
            width: '50%',
            data: { message: 'User Registered!' },
          });
        });
      } else {
        this.error.open(ErrorComponent, {
          width: '50%',
          data: { message: 'User Already Exists!' },
        });
      }
    });
  }
}
