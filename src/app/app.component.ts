import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TestsComponent } from './tests/tests.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestsComponent,CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'test_project';
}
