import { ApplicationRef, Component, inject } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    standalone: false
})
export class AppComponent {
  // appRef = inject(ApplicationRef);
}
