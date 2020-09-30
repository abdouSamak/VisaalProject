import { Component, OnInit } from '@angular/core';
// A supprimer les notifications sont remplacer par les mails
@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  [x: string]: any;

  constructor() { }

  ngOnInit(): void {
  }
  onBack() {
    this.router.navigate(['/notifications']);
  }
}
