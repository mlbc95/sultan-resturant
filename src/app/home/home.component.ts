import { Component, ViewEncapsulation } from '@angular/core';

declare const sal: () => any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  ngOnInit() {
    sal()
  }
}
