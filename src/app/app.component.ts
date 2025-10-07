import { ApplicationRef, Component, inject } from "@angular/core";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RouterOutlet } from "@angular/router";
import { WeekTodoComponent } from "./todo/week-todo/week-todo.component";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    imports: [NavbarComponent, RouterOutlet]
})
export class AppComponent {
  // appRef = inject(ApplicationRef);
}
