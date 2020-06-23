import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateThreadsScreenComponent } from '../create-threads-screen/create-threads-screen.component';
import { Threads } from 'src/app/models/threads';
import { Reply } from 'src/app/models/reply';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css'],
})
export class ReplyComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CreateThreadsScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public newThread: Reply
  ) {}

  ngOnInit(): void {}
}
