import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ContentService } from '../services/content.service';
import { CosmicService } from '../services/cosmic.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  providers: [CosmicService, ContentService],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  openingHours: any;
  formatedTime: any;
  constructor(private cosmicService: CosmicService, private _contentService: ContentService) {
  }

  ngOnInit() {
    this.cosmicService.getHomePageData().subscribe((data: any) => {
      this.openingHours = data.object.metadata.opening_hours
      console.log(this.openingHours)
      // this.formatTime()

    })

    this._contentService.getContent().subscribe((data: any) => {
      console.log(data)
    })
  }

  formatTime() {
    let firstDay;
    let lastDay

    // let matchedHours = this.openingHours.filter((d: any) => d.hours === )
    // for (let i = 0; i < this.openingHours.length; i++) {
    //   console.log(this.openingHours[i])
    //   if (this.openingHours[i].hours === this.openingHours[i + 1]) {
    //     firstDay = this.openingHours[i].hours;
    //   } else {
    //     this.formatedTime.push({"day":this.openingHours[i].day })
    //   }
    // }
  }

}
