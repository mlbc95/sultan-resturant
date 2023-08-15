import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tHours: string = "";
  hours: any = [
    { day: "Sunday", hours: "11:30 AM - 8:00 PM" },
    { day: "Monday", hours: "closed" },
    { day: "Tuesday", hours: "11:30 AM - 8:00 PM" },
    { day: "Wednesday", hours: "11:30 AM - 8:00 PM" },
    { day: "Thursday", hours: "11:30 AM - 8:00 PM" },
    { day: "Friday", hours: "11:30 AM - 8:30 PM" },
    { day: "Saturday", hours: "11:30 AM - 8:30 PM" }

  ]

  ngOnInit() {
    let day = (new Date()).getDay()
    console.log(new Date())
    console.log(day)
    this.tHours = this.hours[day].hours
  }

}
