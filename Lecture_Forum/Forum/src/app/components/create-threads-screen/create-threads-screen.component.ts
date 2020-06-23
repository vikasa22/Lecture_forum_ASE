import { Component, OnInit, Input, Inject } from '@angular/core';
import { DatabaseService } from 'src/app/services/database.service';
import { Threads } from 'src/app/models/threads';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-threads-screen',
  templateUrl: './create-threads-screen.component.html',
  styleUrls: ['./create-threads-screen.component.css'],
})
export class CreateThreadsScreenComponent implements OnInit {
  constructor(
    private api: DatabaseService,
    public dialogRef: MatDialogRef<CreateThreadsScreenComponent>,
    @Inject(MAT_DIALOG_DATA) public newThread: Threads
  ) {}

  ngOnInit(): void {}
}
