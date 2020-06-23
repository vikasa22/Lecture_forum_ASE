import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { CreateThreadsScreenComponent } from '../create-threads-screen/create-threads-screen.component';
import { Subject } from 'rxjs';
import { Threads } from 'src/app/models/threads';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  loggedinUser: string;
  threadCreated: Subject<Threads> = new Subject<Threads>();
  constructor(
    private user: UserService,
    private api: DatabaseService,
    private loginScreen: MatDialog,
    private createNewThread: MatDialog
  ) {}

  ngOnInit(): void {
    if (this.user.isLoggedIn == undefined || this.user.isLoggedIn == false) {
      const loginRef = this.loginScreen.open(LoginComponent, {
        disableClose: true,
        width: '50%',
      });
      loginRef.afterClosed().subscribe((result) => {
        this.refresh(result, false);
      });
    }
  }
  createThread(): void {
    const threadref = this.createNewThread.open(CreateThreadsScreenComponent, {
      disableClose: true,
      width: '70%',
      data: new Threads(),
    });
    threadref.afterClosed().subscribe((data) => {
      this.refresh(data, true);
    });
  }
  refresh(result: Threads, isThread: boolean) {
    this.loggedinUser = this.user.username;
    if (isThread) {
      result.userID = this.user.userID;
      this.api.createNewThread(result).subscribe((data) => {
        console.log(data);
        this.threadCreated.next(result);
      });
    }
  }
}
