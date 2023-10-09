import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  providers: [],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  openingHours: any;
  formatedTime: any;
  constructor() {

  }
  ngOnInit() {
    this.openingHours = [
      {
        day: "Sunday", abbr: "Sun", hours: "11:30 AM - 8:00 PM"
      },
      {
        day: "Monday", abbr: "Mon", hours: "Closed"
      },
      {
        day: "Tuesday-Thursday", abbr: "Tue - Th", hours: "11:30 AM - 8:00 PM"
      },
      {
        day: "Friday-Saturday", abbr: "Fri - Sat", hours: "11:30 AM - 8:30 PM"
      }
    ]
  }


}
