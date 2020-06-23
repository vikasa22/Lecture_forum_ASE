import { Component, OnInit, APP_ID } from '@angular/core';
import { Threads } from 'src/app/models/threads';
import { UserService } from 'src/app/services/user.service';
import { DatabaseService } from 'src/app/services/database.service';
import { MatDialog } from '@angular/material/dialog';
import { HomeComponent } from '../home/home.component';
import { ThreadDisplay } from 'src/app/models/thread-display';
import { Reply } from 'src/app/models/reply';
import { ReplyComponent } from '../reply/reply.component';
import { ReplyDisplay } from 'src/app/models/reply-display';
import { CreateThreadsScreenComponent } from '../create-threads-screen/create-threads-screen.component';

@Component({
  selector: 'app-my-threads',
  templateUrl: './my-threads.component.html',
  styleUrls: ['./my-threads.component.css'],
})
export class MyThreadsComponent implements OnInit {
  isActive: boolean;
  threads: ThreadDisplay[];
  newThread: Threads;
  panelOpenState: boolean;
  constructor(
    public user: UserService,
    private api: DatabaseService,
    private home: HomeComponent,
    private replyScreen: MatDialog,
    private updateOldThread: MatDialog
  ) {}

  ngOnInit(): void {
    this.user.logginChange.subscribe((userdata) => {
      this.refresh();
    });
    this.home.threadCreated.subscribe((data) => {
      this.refresh();
    });
  }
  refresh(): void {
    this.api.getUserThreads(this.user.userID).subscribe((data) => {
      if (data.length > 0) {
        this.threads = new Array();
        data.forEach((element) => {
          this.api.getUserByID(element.userID).subscribe((userData) => {
            let thread = new ThreadDisplay();
            thread.username = userData.username;
            thread.attachment = element.attachment;
            thread.replies = element.replies == null ? 0 : element.replies;
            thread.threadDescription = element.threadDescription;
            thread.threadSummary = element.threadSummary;
            thread.dateTime = element.dateTime;
            thread.threadID = element.threadID;
            thread.reply = new Array();
            this.api.getReplies(element.threadID).subscribe((data) => {
              if (data.length > 0) {
                data.forEach((element) => {
                  this.api.getUserByID(element.userID).subscribe((userDets) => {
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
  deleteThread(threadID: number): void {
    this.api.deleteThread(threadID).subscribe((data) => {
      console.log(data);
      this.refresh();
    });
  }
  editThread(thread: ThreadDisplay): void {
    let threadToEdit = new Threads();
    threadToEdit.threadDescription = thread.threadDescription;
    threadToEdit.threadSummary = thread.threadSummary;
    threadToEdit.threadID = thread.threadID;

    let editRef = this.updateOldThread.open(CreateThreadsScreenComponent, {
      disableClose: true,
      width: '70%',
      data: threadToEdit,
    });
    editRef.afterClosed().subscribe((data) => {
      let editThread = new Threads();
      editThread.threadID = data.threadID;
      editThread.threadDescription = data.threadDescription;
      editThread.threadSummary = data.threadSummary;
      thread.dateTime = new Date();
      editThread.userID = this.user.userID;
      this.api.createNewThread(editThread).subscribe((data) => {
        this.refresh();
      });
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
      console.log(data);
      this.api.createReply(data).subscribe((data) => {
        this.refresh();
      });
    });
  }
}
