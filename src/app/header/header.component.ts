import { Component, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent {
  title = "header";
  menuToggleFlag: boolean = false;

  menuToggle(event: {
    srcElement: {
      classList: {
        add: (arg0: string) => void;
        remove: (arg0: string) => void;
      };
    };
  }) {
    this.menuToggleFlag = !this.menuToggleFlag;
  }
}
