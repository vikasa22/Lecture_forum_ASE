import { Component, OnInit } from '@angular/core';
import { Threads } from 'src/app/models/threads';
import { DatabaseService } from 'src/app/services/database.service';
import { ThreadDisplay } from 'src/app/models/thread-display';
import { User } from 'src/app/models/user';
import { HomeComponent } from '../home/home.component';
import { Reply } from 'src/app/models/reply';
import { UserService } from 'src/app/services/user.service';
import { ReplyComponent } from '../reply/reply.component';
import { MatDialog } from '@angular/material/dialog';
import { ReplyDisplay } from 'src/app/models/reply-display';
import { MyThreadsComponent } from '../my-threads/my-threads.component';

@Component({
  selector: 'app-all-threads',
  templateUrl: './all-threads.component.html',
  styleUrls: ['./all-threads.component.css'],
})
export class AllThreadsComponent implements OnInit {
  isActive: boolean;
  threads: ThreadDisplay[];
  panelOpenState: boolean;

  constructor(
    private apis: DatabaseService,
    private home: HomeComponent,
    private replyScreen: MatDialog,
    private user: UserService
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.home.threadCreated.subscribe((data) => {
      console.log(data);
      this.refresh();
    });
    this.user.logginChange.subscribe((userdata) => {
      this.refresh();
    });
  }
  refresh(): void {
    this.apis.getAllThreads().subscribe((data) => {
      if (data.length > 0) {
        this.threads = new Array();
        data.forEach((element) => {
          this.apis.getUserByID(element.userID).subscribe((userData) => {
            let thread = new ThreadDisplay();
            thread.username = userData.username;
            thread.attachment = element.attachment;
            thread.replies = element.replies == null ? 0 : element.replies;
            thread.threadDescription = element.threadDescription;
            thread.threadSummary = element.threadSummary;
            thread.threadID = element.threadID;
            thread.dateTime = element.dateTime;
            thread.reply = new Array();
            this.apis.getReplies(element.threadID).subscribe((data) => {
              if (data.length > 0) {
                data.forEach((element) => {
                  this.apis
                    .getUserByID(element.userID)
                    .subscribe((userDets) => {
                      let rply = new ReplyDisplay();
                      rply.username = userDets.username;
                      rply.attachment = element.attachment;
                      rply.dateTime = element.dateTime;
                      rply.replyID = element.replyID;
                      rply.replyText = element.replyText;
                      rply.threadID = element.threadID;
                      thread.reply.push(rply);
                    });
                });
              }
            });

            this.threads.push(thread);
          });
        });
      } else {
        this.threads = new Array();
      }
    });
  }
  panelOpen(): void {
    this.threads.forEach((thread) => {
      thread.reply = thread.reply.sort(
        (a: any, b: any) =>
          new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime()
      );
    });
    this.panelOpenState = true;
  }
  reply(threadID: number): void {
    let replyRef = this.replyScreen.open(ReplyComponent, {
      disableClose: true,
      width: '70%',
      data: new Reply(),
    });
    replyRef.afterClosed().subscribe((data) => {
      data.userID = this.user.userID;
      data.threadID = threadID;
      this.apis.createReply(data).subscribe((data) => {
        this.refresh();
      });
    });
  }
}
