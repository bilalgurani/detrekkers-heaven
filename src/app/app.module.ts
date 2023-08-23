import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HotelComponent } from './hotel/hotel.component';
import { FlightComponent } from './flight/flight.component';
import { ToursComponent } from './tours/tours.component';
import { CarRentalComponent } from './car-rental/car-rental.component';
import { RouterModule } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { DatePipe } from '@angular/common';
import { ErrorComponent } from './error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HotelComponent,
    FlightComponent,
    ToursComponent,
    CarRentalComponent,
    ViewComponent,
    ErrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: HotelComponent },
      { path: 'hotels', component: HotelComponent },
      { path: 'flights', component: FlightComponent },
      { path: 'car-rental', component: CarRentalComponent },
      { path: 'tours', component: ToursComponent },
      { path: '**', component: ErrorComponent },
    ]),
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [DatePipe],
})
export class AppModule {}
