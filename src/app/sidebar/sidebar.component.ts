import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  currentYear = new Date().getFullYear();

  sideBarList = [
    {
      nav: "hotels",
      name: 'hotel',
      svgLink: '../../assets/sprite.svg#icon-home',
    },
    {
      nav: "flights",
      name: 'flight',
      svgLink: '../../assets/sprite.svg#icon-aircraft-take-off',
    },
    {
      nav: "car-rental",
      name: 'car rental',
      svgLink: '../../assets/sprite.svg#icon-key',
    },
    {
      nav: "tours",
      name: 'tours',
      svgLink: '../../assets/sprite.svg#icon-map',
    },
  ];
}
