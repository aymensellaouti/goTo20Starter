import { ApplicationRef, Component, inject } from '@angular/core';
import { NavbarComponent } from './components/navbar/navbar.component';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { WeekTodoComponent } from './todo/week-todo/week-todo.component';
import { NgxSpinnerComponent, NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NavbarComponent, RouterOutlet, NgxSpinnerComponent],
})
export class AppComponent {
  // appRef = inject(ApplicationRef);
  router = inject(Router);
  spinner = inject(NgxSpinnerService);
  constructor() {
    // this.router.events.subscribe({
    //   next: (event) => {
    //     if (event instanceof NavigationStart) {
    //       this.spinner.show();
    //     } else if (
    //       event instanceof NavigationEnd ||
    //       event instanceof NavigationCancel ||
    //       event instanceof NavigationError
    //     ) {
    //       this.spinner.hide();
    //     }
    //   },
    // });
  }
}
