import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { CountersComponent } from '../counters/counters.component';
import { CustomerFeedbackComponent } from '../customer-feedback/customer-feedback.component';
import { InTheNewsComponent } from '../in-the-news/in-the-news.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { MealOfTheWeekComponent } from '../meal-of-the-week/meal-of-the-week.component';
import { MenuListComponent } from "../menu-list-2/menu-list-2.component";
import { MenuComponent } from '../menu/menu.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { ReservationComponent } from '../reservation/reservation.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MainBannerComponent, AboutComponent,
    InTheNewsComponent, MenuComponent,
    ReservationComponent, OurTeamComponent,
    CountersComponent, CustomerFeedbackComponent,
    MealOfTheWeekComponent, BlogComponent,
    MenuListComponent
  ]
})
export class HomeComponent { }
