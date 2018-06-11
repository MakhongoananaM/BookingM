import {ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactComponent} from './contact/contact.component';
import {ReservationComponent} from './reservation/reservation.component';
import {BookingComponent} from './booking/booking.component';

export const router: Routes = [
    {path:'', redirectTo: 'about', pathMatch: 'full'},
    {path: 'about', component: AboutComponent },
    {path: 'gallery', component: GalleryComponent },
    {path: 'contact', component: ContactComponent },
    {path: 'reservation', component: ReservationComponent},
    {path: 'booking', component: BookingComponent },

];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
