import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink],
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent {
  title = 'Movies app';
}
