import { Component } from '@angular/core';

@Component({
  selector: 'app-menu-detail',
  standalone: true,
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.scss']
})
export class MenuDetailComponent {

  selectedItem: ImenuItem = { type: "Appetizers", name: "", descrption: '', price: "0", img: '' };
  ngOnInit() {
    this.selectedItem = <ImenuItem>JSON.parse(localStorage.getItem('selectedItem') || " ")
  }
}
