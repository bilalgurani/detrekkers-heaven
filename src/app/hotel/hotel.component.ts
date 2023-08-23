import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss'],
})
export class HotelComponent {
  constructor(private datePipe: DatePipe) {}
  randomData = this.datePipe.transform(new Date(), 'dd MMM, yyyy');

  hotelsList = {
    name: 'Mayor Aditya',
    ratings: [1, 1, 1, 1],
    location: 'Navalur, Dharwad - 580008',
    avgRating: 7.8,
    votes: 232,
    displayImages: [
      {
        img: 'hotel-1.jpeg',
        alt: 'Photo of Hotel 1',
      },
      {
        img: 'hotel-2.jpeg',
        alt: 'Photo of Hotel 2',
      },
      {
        img: 'hotel-3.jpeg',
        alt: 'Photo of Hotel 3',
      },
    ],
    featuresOfHotel: [
      'Close to the beach',
      'Breakfast included',
      'Free airport shuttle',
      'Free wifi',
      'Air conditioning and heating',
      'Pets not allowed',
      'We speak all language',
      'Perfect for families',
    ],
    feedback: [
      {
        name: 'Bilal',
        url: '../../assets/user-1.jpg',
      },
      {
        name: 'Khan',
        url: '../../assets/user-2.jpg',
      },
      {
        name: 'Gurani',
        url: '../../assets/user-3.jpg',
      },
      {
        name: 'King',
        url: '../../assets/user-4.jpg',
      },
      {
        name: 'Alcrity',
        url: '../../assets/user-5.jpg',
      },
      {
        name: 'Sineen',
        url: '../../assets/user-6.jpg',
      },
    ],
    reviews: [
      {
        img: '../../assets/user-1.jpg',
        name: 'Bilal',
        rating: 6.7,
        comment:
          'lorem insum this is amazing hotel I ever stayed in my life and I want to recommend to everyone to try out once and then thank me later.',
      },
      {
        img: '../../assets/user-6.jpg',
        name: 'Sineen',
        rating: 8.7,
        comment:
          'lorem insum this is amazing hotel I ever stayed in my life and I want to recommend to everyone to try out once and then thank me later.',
      },
    ],
  };
}
