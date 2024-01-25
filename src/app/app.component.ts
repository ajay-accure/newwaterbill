import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './auth/login/login.component';
// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,HomeComponent,LoginComponent, RouterOutlet,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'waterbill';
}
