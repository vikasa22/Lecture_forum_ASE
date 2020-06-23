import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { MyThreadsComponent } from './components/my-threads/my-threads.component';
import { AllThreadsComponent } from './components/all-threads/all-threads.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatTreeModule } from '@angular/material/tree';
import { FormsModule } from '@angular/forms';
import { CreateThreadsScreenComponent } from './components/create-threads-screen/create-threads-screen.component';
import { ReplyComponent } from './components/reply/reply.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MyThreadsComponent,
    AllThreadsComponent,
    HomeComponent,
    ErrorComponent,
    CreateThreadsScreenComponent,
    ReplyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatBadgeModule,
    MatDialogModule,
    MatDividerModule,
    FormsModule,
    MatInputModule,
    MatExpansionModule,
    HttpClientModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTreeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
