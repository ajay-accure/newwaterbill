import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router: any;

  login() {
    this.router.navigate(['/login'])
  }

   isCollapsed = true;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
  }
}
