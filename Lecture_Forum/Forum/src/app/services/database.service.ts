import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Threads } from '../models/threads';
import { Reply } from '../models/reply';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  constructor(private http: HttpClient) {}
  userURI = '/api/user/';
  usersURI = '/api/users/';
  createUserURI = '/api/createUser';
  getThreads = '/api/threads/';
  createThread = '/api/threads';
  reply = '/api/threads/reply/';
  delThread = '/api/threads/';

  deleteThread(threadID: number): any {
    return this.http.delete<any>(this.delThread + threadID);
  }
  getPassword(name: string): any {
    return this.http.get<any>(this.userURI + name);
  }
  createUser(user: User): any {
    return this.http.post<any>(this.createUserURI, user);
  }
  getUserThreads(userID: number): any {
    return this.http.get<any>(this.getThreads + userID);
  }
  createNewThread(thread: Threads): any {
    return this.http.post<any>(this.createThread, thread);
  }
  getAllThreads(): any {
    return this.http.get<any>(this.createThread);
  }
  getUserByID(userID: number): any {
    return this.http.get<any>(this.usersURI + userID);
  }
  createReply(reply: Reply): any {
    return this.http.post<any>(this.reply, reply);
  }
  getReplies(threadID: number): any {
    return this.http.get<Reply>(this.reply + threadID);
  }
}
