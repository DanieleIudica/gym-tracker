import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  progress = 0;

  constructor() {
    setInterval(() => {
      this.progress = this.progress + 1;
    }, 200);
  }
}
