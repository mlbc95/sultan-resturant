import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { BlogComponent } from '../blog/blog.component';
import { CountersComponent } from '../counters/counters.component';
import { CustomerFeedbackComponent } from '../customer-feedback/customer-feedback.component';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { InTheNewsComponent } from '../in-the-news/in-the-news.component';
import { MainBannerComponent } from '../main-banner/main-banner.component';
import { MealOfTheWeekComponent } from '../meal-of-the-week/meal-of-the-week.component';
import { MenuComponent } from '../menu/menu.component';
import { OurTeamComponent } from '../our-team/our-team.component';
import { ReservationComponent } from '../reservation/reservation.component';
import { SideBarComponent } from '../side-bar/side-bar.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    HeaderComponent, SideBarComponent,
    MainBannerComponent, AboutComponent,
    InTheNewsComponent, MenuComponent,
    ReservationComponent, OurTeamComponent,
    CountersComponent, CustomerFeedbackComponent,
    MealOfTheWeekComponent, BlogComponent,
    FooterComponent
  ],
  standalone: true,
})
export class HomeComponent { }
