import { Component, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visaal2';

  @ViewChild(MatMenuTrigger) trigger: MatMenuTrigger;
 
  someMethod() {
    this.trigger.openMenu();
  }
}
